import { expect, test } from 'vitest'
import { compose } from '../src/compose.js'
import { peek } from '../src/peek.js'
import { asyncCompose } from '../src/asyncCompose.js'

test('basic', () => {
  const getLength = (x: string) => x.length
  const increaseOne = (x: number) => x + 1
  const input = 'hello'
  const workFlow = compose(
    peek('result '),
    increaseOne,
    peek('before increse'),
    getLength,
    peek('before getLenght')
  )
  expect(workFlow(input)).eq(input.length + 1)
})

test('async', async () => {
  const getLength = (x: string) => Promise.resolve(x.length)
  const increaseOne = (x: number) => x + 1
  const input = 'hello'
  const workFlow = asyncCompose(
    peek('result '),
    increaseOne,
    peek('before increse'),
    getLength
  )
  const result = await workFlow(input)
  expect(result).eq(input.length + 1)
})
