import { Currency } from '../Currency';
import { NativeCurrency } from '../NativeCurrency';
import { Token } from '../Token';
/**
 * Cronos is the main usage of a 'native' currency, i.e. for Cronos mainnet and all testnets
 */
export declare class Cronos extends NativeCurrency {
    protected constructor(chainId: number);
    get wrapped(): Token;
    private static _etherCache;
    static onChain(chainId: number): Cronos;
    equals(other: Currency): boolean;
}
