import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WNATIVE } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Cronos extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'CRONOS', 'Cronos')
  }

  public get wrapped(): Token {
    const wcelo = WNATIVE[this.chainId]
    invariant(!!wcelo, 'WRAPPED')
    return wcelo
  }

  private static _cache: { [chainId: number]: Cronos } = {}

  public static onChain(chainId: number): Cronos {
    return this._cache[chainId] ?? (this._cache[chainId] = new Cronos(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
