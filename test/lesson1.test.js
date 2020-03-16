import { add,minus } from '../src/lesson1';

test("测试1+1", () => {
  expect(add(1, 1)).toBe(2)
})
test("测试4-1", () => {
  expect(minus(4, 1)).toBe(3)
})