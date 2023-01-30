var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("types/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("actions/balance", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.totalSupply = exports.balanceOf = void 0;
    // return the current balance for the given wallet
    const balanceOf = async (state, { input: { target } }) => {
        const ticker = state.symbol;
        return { result: { ticker, balance: state.balances[target] || 0, target } };
    };
    exports.balanceOf = balanceOf;
    // return the total supply of tokens
    const totalSupply = async (state) => {
        return { result: { value: state.totalSupply } };
    };
    exports.totalSupply = totalSupply;
});
define("actions/allowances", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._getAllowance = exports._setAllowance = exports.approve = exports.allowance = void 0;
    // return the amount which spender is allowed to withdraw from owner
    const allowance = async (state, { input: { owner, spender } }) => {
        const ticker = state.symbol;
        return { result: { ticker, allowance: (0, exports._getAllowance)(state.allowances, owner, spender), owner, spender } };
    };
    exports.allowance = allowance;
    // approve tokens to be spent by another account between wallets
    const approve = async (state, { caller, input: { amount, spender } }) => {
        (0, exports._setAllowance)(state.allowances || {}, caller, spender, amount);
        return { state };
    };
    exports.approve = approve;
    const _setAllowance = (allowances, owner, spender, amount) => {
        if (amount > 0) {
            if (allowances[owner]) {
                allowances[owner][spender] = amount;
            }
            else {
                allowances[owner] = {
                    [spender]: amount,
                };
            }
        }
        else {
            delete allowances[owner][spender];
            if (!Object.keys(allowances[owner]).length) {
                delete allowances[owner];
            }
        }
    };
    exports._setAllowance = _setAllowance;
    const _getAllowance = (allowances, owner, spender) => {
        return allowances[owner] ? allowances[owner][spender] || 0 : 0;
    };
    exports._getAllowance = _getAllowance;
});
define("actions/evolve", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.evolve = void 0;
    const evolve = async (state, { caller, input: { value } }) => {
        const evolve = value;
        const owner = state.owner;
        if (caller != owner) {
            throw new ContractError('Evolve permissions error - only contract owner can evolve');
        }
        if (!state.canEvolve) {
            throw new ContractError('Evolve not allowed');
        }
        state.evolve = evolve;
        return { state };
    };
    exports.evolve = evolve;
});
define("actions/transfers", ["require", "exports", "actions/allowances"], function (require, exports, allowances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transferFrom = exports.transfer = void 0;
    // allows to transfer tokens between wallets
    const transfer = async (state, { caller, input: { to, amount } }) => {
        return _transfer(state, caller, to, amount);
    };
    exports.transfer = transfer;
    // allows transferring tokens using the allowance mechanism
    const transferFrom = async (state, { caller, input: { from, to, amount } }) => {
        const allowance = (0, allowances_1._getAllowance)(state.allowances, from, caller);
        if (allowance < amount) {
            throw new ContractError(`Caller allowance not high enough to send ${amount} token(s)!`);
        }
        (0, allowances_1._setAllowance)(state.allowances, from, caller, allowance - amount);
        return _transfer(state, from, to, amount);
    };
    exports.transferFrom = transferFrom;
    const _transfer = async (state, from, to, amount) => {
        const balances = state.balances;
        if (!balances[from]) {
            throw new ContractError(`Caller balance is not defined!`);
        }
        if (balances[from] < amount) {
            throw new ContractError(`Caller balance not high enough to send ${amount} token(s)! ${balances[from]} ${from}`);
        }
        const fromBalance = balances[from];
        if (fromBalance - amount == 0) {
            delete balances[from];
        }
        else {
            balances[from] -= amount;
        }
        if (to in balances) {
            balances[to] += amount;
        }
        else {
            balances[to] = amount;
        }
        _claimOwnership(state, from, to);
        return { state };
    };
    const _claimOwnership = (state, from, to) => {
        const fromBalance = state.balances[from];
        const toBalance = state.balances[to];
        if (state.owner && fromBalance != state.totalSupply) {
            state.owner = null;
        }
        if (toBalance == state.totalSupply) {
            state.owner = to;
        }
    };
});
define("actions/voting", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upvoteMessage = void 0;
    const upvoteMessage = async (state, { caller }) => {
        const votes = state.votes;
        if (votes.addresses.includes(caller)) {
            throw new ContractError('caller has already voted');
        }
        votes.status++;
        votes.addresses.push(caller);
        return { state };
    };
    exports.upvoteMessage = upvoteMessage;
});
define("contract", ["require", "exports", "actions/balance", "actions/allowances", "actions/evolve", "actions/transfers", "actions/voting"], function (require, exports, balance_1, allowances_2, evolve_1, transfers_1, voting_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handle = void 0;
    async function handle(state, action) {
        const input = action.input;
        switch (input.function) {
            case 'balanceOf':
                return await (0, balance_1.balanceOf)(state, action);
            case 'totalSupply':
                return await (0, balance_1.totalSupply)(state);
            case 'allowance':
                return await (0, allowances_2.allowance)(state, action);
            case 'approve':
                return await (0, allowances_2.approve)(state, action);
            case 'evolve':
                return await (0, evolve_1.evolve)(state, action);
            case 'transfer':
                return await (0, transfers_1.transfer)(state, action);
            case 'transferFrom':
                return await (0, transfers_1.transferFrom)(state, action);
            case 'upvoteMessage':
                return await (0, voting_1.upvoteMessage)(state, action);
            default:
                throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
        }
    }
    exports.handle = handle;
});
define("tools/contractTags", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const contractTags = [
        { name: "Content-Type", value: "image/jpeg" },
        { name: "App-Name", value: "SmartWeaveContract" },
        { name: "App-Version", value: "0.3.0" },
        {
            name: "Contract-Src",
            value: "X6FREUVChm7KpDhJjSaUfN6z6oIF3byZISqISPCyPGs",
        },
        {
            name: "Init-State",
            value: JSON.stringify({
                owner: "_ei0RuqVv5j6oVIOXoMSGOrWOOzGMrhiWnR3AS0EOhM",
            }),
        },
        { name: "Title", value: "Asset" },
        { name: "Description", value: "Description" },
        { name: "Type", value: "Text" },
    ];
    exports.default = contractTags;
});
define("tools/configureServerEnv", ["require", "exports", "warp-contracts", "fs"], function (require, exports, warp_contracts_1, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.warp = exports.configureWallet = void 0;
    fs_1 = __importDefault(fs_1);
    const env = process.env.WARPENV || "mainnet";
    let warp;
    exports.warp = warp;
    if (env == "testnet") {
        exports.warp = warp = warp_contracts_1.WarpFactory.forTestnet();
    }
    else if (env == "mainnet") {
        exports.warp = warp = warp_contracts_1.WarpFactory.forMainnet();
    }
    else {
        throw new Error("Invalid environment");
    }
    async function configureWallet() {
        try {
            if (env == "testnet") {
                try {
                    return JSON.parse(fs_1.default.readFileSync("./testnet.json", "utf-8"));
                }
                catch (err) {
                    console.log("Generating new wallet");
                    const jwk = await warp.testing.arweave.wallets.genereteWallet();
                    fs_1.default.writeFileSync("./testnet.json", JSON.stringify(jwk));
                    return jwk;
                }
            }
            else {
                try {
                    return JSON.parse(fs_1.default.readFileSync("./mainnet.json", "utf-8"));
                }
                catch (err) {
                    console.log("Generating new wallet");
                    const jwk = await warp.arweave.wallets.generate();
                    fs_1.default.writeFileSync("./mainnet.json", JSON.stringify(jwk));
                    return jwk;
                }
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
    exports.configureWallet = configureWallet;
});
define("tools/atomicdeploy", ["require", "exports", "tools/contractTags", "@bundlr-network/client", "warp-contracts", "tools/configureServerEnv", "fs"], function (require, exports, contractTags_js_1, client_1, warp_contracts_2, configureServerEnv_js_1, fs_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    contractTags_js_1 = __importDefault(contractTags_js_1);
    client_1 = __importDefault(client_1);
    fs_2 = __importDefault(fs_2);
    const jwk = JSON.parse(fs_2.default.readFileSync("mainnet.json").toString());
    const bundlr = new client_1.default.default("https://node2.bundlr.network", "arweave", jwk);
    const data = fs_2.default.readFileSync("./data/download.jpeg");
    const tx = await bundlr.upload(data, { tags: contractTags_js_1.default });
    const { contractTxId } = await configureServerEnv_js_1.warp.register(tx.id, "node2");
    console.log(`Check the data: https://arweave.net/${contractTxId}`);
});
define("tools/deploy", ["require", "exports", "fs", "tools/configureServerEnv"], function (require, exports, fs_3, configureServerEnv_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_3 = __importDefault(fs_3);
    async function deploy() {
        const wallet = await (0, configureServerEnv_js_2.configureWallet)();
        const state = fs_3.default.readFileSync("./state.json", "utf8");
        const contractSrc = fs_3.default.readFileSync("../../../dist/contract.js", "utf8");
        const { contractTxId } = await configureServerEnv_js_2.warp.createContract.deploy({
            wallet,
            initState: state,
            src: contractSrc,
        });
        fs_3.default.writeFileSync("./transactionid.js", `export const contractTxId = "${contractTxId}"`);
        const contract = await configureServerEnv_js_2.warp.contract(contractTxId).connect(wallet);
        const cachedState = await contract.readState();
        console.log(cachedState);
        console.log(contractTxId);
    }
    deploy();
});
// get info about contract provided by contractTxId
define("tools/getinfoaboutcontract", ["require", "exports", "tools/configureServerEnv"], function (require, exports, configureServerEnv_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function getInfoAboutContract() {
        const wallet = configureServerEnv_js_3.warp;
        const contractTxId = "Tu-VG5D_GAcLy7tszM28QjZ2kbNEBKJf-8qgzjn-Vvo";
        const contract = await configureServerEnv_js_3.warp.contract(contractTxId).connect(wallet);
        const cachedState = await contract.readState();
        console.log(cachedState);
        console.log(contractTxId);
    }
    getInfoAboutContract();
});
define("tools/transactionid", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.contractTxId = void 0;
    exports.contractTxId = "0RMBRnB5jMLUg2pSwxFz6gYgtlNil2BEx9o73cCww04";
});
