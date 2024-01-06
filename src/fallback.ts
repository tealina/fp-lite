/**
 * if `v` is null, excute `fn`\
 */
export const fallback =
  <T, R>(fn: () => R) =>
  (v: T) =>
    v == null ? fn() : v
