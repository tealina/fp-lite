export const map =
  <T, R>(f: (x: T) => R) =>
  (xs: T[]): R[] => {
    let results: any[] = []
    for (let i = 0, len = xs.length; i < len; i++) {
      results.push(f(xs[i]))
    }
    return results
  }

export const flat = <T>(list: T[]) => list.flat<T[], 1>()

export const first = <T>(list: T[]): T | undefined => list[0]

export const last = <T>(list: T[]) =>
  list.length > 0 ? list[list.length - 1] : undefined

export const groupByFn = <T, R>(
  arr: T[],
  keyMaker: (x: T) => R
): Map<R, T[]> => {
  const acc = new Map()
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    const k = keyMaker(cur)
    acc.has(k) ? acc.get(k).push(cur) : acc.set(k, [cur])
  }
  return acc
}

export const separeByFn = <T>(arr: T[], keyMaker: (x: T) => string): T[][] =>
  toList(groupByFn(arr, keyMaker).values())

export const separeBy =
  <T>(keyMaker: (x: T) => string) =>
  (arr: T[]): T[][] =>
    separeByFn(arr, keyMaker)

export const groupBy =
  <T, R>(keyMaker: (x: T) => R) =>
  (arr: T[]): Map<R, T[]> =>
    groupByFn(arr, keyMaker)

export const notNull = <T>(x: T): x is NonNullable<T> => x != null

export const unique = <T>(arr: T[]) => [...new Set(arr)]

export const toList = <T>(xs: Iterable<T> | ArrayLike<T>) => Array.from(xs)

export const waitAll = <T extends Parameters<typeof Promise.all>[0]>(ps: T) =>
  Promise.all(ps)

/** concat array */
export const concat =
  <T>(...ys: (readonly T[] | T)[]) =>
  (xs: T[] | readonly T[]) =>
    xs.concat(...ys)
