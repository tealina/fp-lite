import { expect, test, vi } from 'vitest'
import { fallback } from '../src/fallback.js'
import { maybe } from '../src/maybe.js'

test('maybe', () => {
  const fn = vi.fn()
  const result = maybe(fn)(null)
  expect(result).null
  expect(fn).not.toBeCalled()
  const two = maybe((x: number) => x + 1)(1)
  expect(two).eq(2)
})

test('fallback', () => {
  const fn = vi.fn()
  const mockV = 'value'
  const result = fallback(fn)(mockV)
  expect(result).eq(mockV)
  expect(fn).not.toBeCalled()
  const two = fallback(() => 2)(null)
  expect(two).eq(2)
})
