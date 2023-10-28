type NumberKeys<T, K extends keyof T = keyof T> = K extends K
  ? number extends T[K]
    ? K
    : never
  : never

type CheckGivenProp = <T, K extends NumberKeys<T>>(k: K) => (x: T) => boolean

/**
 * @example
 * ```ts
 * pipe(new Map(), isZero('size'))
 * pipe(new Set(), isZero('size'))
 * pipe('', isZero('length'))
 * ```
 */
export const isZero: CheckGivenProp = k => x => x[k] === 0

export const notZero: CheckGivenProp = k => x => x[k] !== 0
