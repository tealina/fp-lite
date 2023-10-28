/**
 * console.log the value but not effect the flow
 */
export const peek =
  <T>(label: string) =>
  (x: T) => (console.log(label, x), x)
