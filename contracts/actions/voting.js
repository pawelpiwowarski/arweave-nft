export const upvoteMessage = async (state, { caller }) => {
    const votes = state.votes;
    if (votes.addresses.includes(caller)) {
        throw new ContractError('caller has already voted');
    }
    votes.status++;
    votes.addresses.push(caller);
    return { state };
};
