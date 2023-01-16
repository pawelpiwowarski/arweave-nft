// return the amount which spender is allowed to withdraw from owner
export const allowance = async (state, { input: { owner, spender } }) => {
    const ticker = state.symbol;
    return { result: { ticker, allowance: _getAllowance(state.allowances, owner, spender), owner, spender } };
};
// approve tokens to be spent by another account between wallets
export const approve = async (state, { caller, input: { amount, spender } }) => {
    _setAllowance(state.allowances || {}, caller, spender, amount);
    return { state };
};
export const _setAllowance = (allowances, owner, spender, amount) => {
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
export const _getAllowance = (allowances, owner, spender) => {
    return allowances[owner] ? allowances[owner][spender] || 0 : 0;
};
