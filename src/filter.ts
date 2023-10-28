function filter<T, S extends T>(f: (x: T) => x is S): (list: T[]) => S[]

function filter<T>(f: (x: T) => unknown): (list: T[]) => T[]

function filter<T>(f: (x: T) => unknown) {
  return (xs: T[]) => {
    let results: any[] = []
    for (let i = 0, len = xs.length; i < len; i++) {
      const v = xs[i]
      if (f(v)) {
        results.push(v)
      }
    }
    return results
  }
}

export { filter }
