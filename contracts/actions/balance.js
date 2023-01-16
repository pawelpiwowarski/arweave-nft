// return the current balance for the given wallet
export const balanceOf = async (state, { input: { target } }) => {
    const ticker = state.symbol;
    return { result: { ticker, balance: state.balances[target] || 0, target } };
};
// return the total supply of tokens
export const totalSupply = async (state) => {
    return { result: { value: state.totalSupply } };
};
