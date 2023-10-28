function asyncCompose<A extends ReadonlyArray<unknown>, B>(
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<B>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C>(
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<C>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D>(
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<D>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E>(
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<E>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<F>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<G>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<H>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<I>>

function asyncCompose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<J>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K >(
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<K>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L >(
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<L>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M >(
  m: (x: Awaited<L>) => M,
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<M>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N >(
  n: (x: Awaited<M>) => N,
  m: (x: Awaited<L>) => M,
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<N>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O >(
  o: (x: Awaited<N>) => O,
  n: (x: Awaited<M>) => N,
  m: (x: Awaited<L>) => M,
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<O>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P >(
  p: (x: Awaited<O>) => P,
  o: (x: Awaited<N>) => O,
  n: (x: Awaited<M>) => N,
  m: (x: Awaited<L>) => M,
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<P>>

function asyncCompose<
  A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q >(
  q: (x: Awaited<P>) => Q,
  p: (x: Awaited<O>) => P,
  o: (x: Awaited<N>) => O,
  n: (x: Awaited<M>) => N,
  m: (x: Awaited<L>) => M,
  l: (x: Awaited<K>) => L,
  k: (x: Awaited<J>) => K,
  j: (x: Awaited<I>) => J,
  i: (x: Awaited<H>) => I,
  h: (x: Awaited<G>) => H,
  g: (x: Awaited<F>) => G,
  f: (x: Awaited<E>) => F,
  e: (x: Awaited<D>) => E,
  d: (x: Awaited<C>) => D,
  c: (x: Awaited<B>) => C,
  a: (...a: A) => Promise<B>,
): (...args: A) => Promise<Awaited<Q>>

function asyncCompose(
  ...fns: ((...args: ReadonlyArray<unknown>) => Promise<unknown>)[]
) {
  return (...args: unknown[]) => {
    let i = fns.length - 1
    let v = fns[i](...args)
    i--
    for (; i > -1; i--) {
      v = v.then(fns[i])
    }
    return v
  }
}

export { asyncCompose }
