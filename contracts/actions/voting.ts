import { AtomicAction, AtomicState, ContractResult } from "../types/types"

declare const ContractError

export const upvoteMessage = async (state: AtomicState, {caller}: AtomicAction) :Promise<ContractResult> => {

    const votes = state.votes;
  
    if (votes.addresses.includes(caller)) {
        throw new ContractError('caller has already voted')
    }

      



    votes.status++;
    votes.addresses.push(caller);

  return { state };
};

