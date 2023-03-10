export const evolve = async (state, { caller, input: { value } }) => {
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
