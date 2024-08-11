function compose<A extends ReadonlyArray<unknown>, B>(
  a: (...a: A) => B
): (...args: A) => B

function compose<A extends ReadonlyArray<unknown>, B, C>(
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => C

function compose<A extends ReadonlyArray<unknown>, B, C, D>(
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => D

function compose<A extends ReadonlyArray<unknown>, B, C, D, E>(
  e: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => E

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  e: (x: E) => F,
  d: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => F

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  f: (x: F) => G,
  e: (x: E) => F,
  d: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => G

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  g: (x: G) => H,
  f: (x: F) => G,
  e: (x: E) => F,
  d: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => H

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I
): (...args: A) => I

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  j: (x: I) => J,
  h: (x: H) => I,
  g: (x: G) => H,
  f: (x: F) => G,
  e: (x: E) => F,
  d: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => J

function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K>(
  k: (x: J) => K,
  j: (x: I) => J,
  h: (x: H) => I,
  g: (x: G) => H,
  f: (x: F) => G,
  e: (x: E) => F,
  d: (x: D) => E,
  c: (x: C) => D,
  b: (x: B) => C,
  a: (...a: A) => B,
): (...args: A) => K

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L>(
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => L

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M>(
    m: (x: L) => M,
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => M

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    n: (x: M) => N,
    m: (x: L) => M,
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => N

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    o: (x: N) => O,
    n: (x: M) => N,
    m: (x: L) => M,
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => O

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    p: (x: O) => P,
    o: (x: N) => O,
    n: (x: M) => N,
    m: (x: L) => M,
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => P

function compose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    q: (x: P) => Q,
    p: (x: O) => P,
    o: (x: N) => O,
    n: (x: M) => N,
    m: (x: L) => M,
    l: (x: K) => L,
    k: (x: J) => K,
    j: (x: I) => J,
    h: (x: H) => I,
    g: (x: G) => H,
    f: (x: F) => G,
    e: (x: E) => F,
    d: (x: D) => E,
    c: (x: C) => D,
    b: (x: B) => C,
    a: (...a: A) => B,
  ): (...args: A) => Q


function compose(...fns: ((...args: ReadonlyArray<unknown>) => unknown)[]) {
  return (...args: unknown[]) => {
    let i = fns.length - 1
    let v = fns[i](...args)
    i--
    for (; i > -1; i--) {
      v = fns[i](v)
    }
    return v
  }
}

export { compose }