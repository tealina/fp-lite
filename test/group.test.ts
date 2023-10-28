import { expect, test } from 'vitest'
import { groupBy, pipe } from '../src/index.js'

test('groupBy', () => {
  const list = ['a', 'b', 1, 2]
  const group = pipe(
    list,
    groupBy(v => (typeof v == 'number' ? 'num' : 'str'))
  )
  expect([...group.keys()]).deep.eq(['str', 'num'])
  expect([...group.values()].flat()).deep.eq(list)
})
