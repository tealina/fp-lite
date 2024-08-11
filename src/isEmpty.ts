type CheckKeysLength = (
  x: Record<PropertyKey, unknown> | ReadonlyArray<unknown>,
) => boolean
/**
 * Check object or array is empty.\
 * for other type such `Map` `Set` `String`\
 * use `isZero` instead
 * @example
 * ```ts
 * isEmpty({}) //true
 * isEmpty([]) //true
 * isEmpty({a:1}) //false
 *
 * // Edgecase
 * // ⚠️ empty item in array will be ignore,\
 * // because it can not work with `.map` and other array functions.
 * isEmpty(Array(10)) // true
 * ```
 */
export const isEmpty: CheckKeysLength = x => Object.keys(x).length === 0

export const notEmpty: CheckKeysLength = x => Object.keys(x).length !== 0
