import fs from 'fs';
import path from 'path';
import { HandlerBasedContract, } from 'warp-contracts';
export class ERC20ContractImpl extends HandlerBasedContract {
    async balanceOf(target) {
        const interactionResult = await this.viewState({ function: 'balanceOf', target });
        if (interactionResult.type !== 'ok') {
            throw Error(interactionResult.errorMessage);
        }
        return interactionResult.result;
    }
    async totalSupply() {
        const interactionResult = await this.viewState({ function: 'totalSupply' });
        if (interactionResult.type !== 'ok') {
            throw Error(interactionResult.errorMessage);
        }
        return interactionResult.result;
    }
    async allowance(owner, spender) {
        const interactionResult = await this.viewState({ function: 'allowance', owner, spender });
        if (interactionResult.type !== 'ok') {
            throw Error(interactionResult.errorMessage);
        }
        return interactionResult.result;
    }
    async currentState() {
        return (await super.readState()).cachedValue.state;
    }
    async evolve(newSrcTxId) {
        return Promise.resolve(undefined);
    }
    saveNewSource(newContractSource) {
        return Promise.resolve(undefined);
    }
    async transfer(transfer) {
        return await this.writeInteraction({ function: 'transfer', ...transfer }, { strict: true });
    }
    async transferFrom(transfer) {
        return await this.writeInteraction({ function: 'transferFrom', ...transfer }, { strict: true });
    }
    async approve(approve) {
        return await this.writeInteraction({ function: 'approve', ...approve }, { strict: true });
    }
}
export class AtomicNFTContractImpl extends ERC20ContractImpl {
}
export async function deployAtomicNFT(Warp, initialState, ownerWallet) {
    // deploying contract using the new SDK.
    return Warp.createContract
        .deploy({
        wallet: ownerWallet,
        initState: JSON.stringify(initialState),
        src: fs.readFileSync(path.join(__dirname, '../dist/contract.js'), 'utf8'),
        data: { 'Content-Type': 'text/html', body: '<h1>HELLO WORLD</h1>' },
    })
        .then((txId) => [initialState, txId]);
}
export async function connectAtomicNFT(Warp, contractTxId, wallet) {
    let contract = new AtomicNFTContractImpl(contractTxId, Warp).setEvaluationOptions({
        internalWrites: true
    });
    return contract.connect(wallet);
}
