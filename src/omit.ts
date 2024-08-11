export const omitFn = <T, K extends keyof T>(x: T, ...keys: K[]) =>
  keys.reduce(
    (acc, k) => {
      delete acc[k]
      return acc
    },
    { ...x },
  ) as {
    [RemainKeys in Exclude<keyof T, K>]: T[RemainKeys]
  }

export const omit =
  <T, K extends keyof T>(...keys: K[]) =>
  (x: T) =>
    omitFn(x, ...keys)
