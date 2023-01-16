import { balanceOf, totalSupply } from './actions/balance';
import { allowance, approve } from './actions/allowances';
import { evolve } from './actions/evolve';
import { transfer, transferFrom } from './actions/transfers';
import { upvoteMessage } from './actions/voting';
export async function handle(state, action) {
    const input = action.input;
    switch (input.function) {
        case 'balanceOf':
            return await balanceOf(state, action);
        case 'totalSupply':
            return await totalSupply(state);
        case 'allowance':
            return await allowance(state, action);
        case 'approve':
            return await approve(state, action);
        case 'evolve':
            return await evolve(state, action);
        case 'transfer':
            return await transfer(state, action);
        case 'transferFrom':
            return await transferFrom(state, action);
        case 'upvoteMessage':
            return await upvoteMessage(state, action);
        default:
            throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
    }
}
