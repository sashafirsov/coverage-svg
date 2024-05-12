// ifElse.test.js
import { expect, test } from 'vitest'
import { ifElse } from "./ifElse.js";

test('ifElse', () => {
  expect(ifElse(1)).toBe('param is: one')
  expect(ifElse()).toBe('param is missing')
})