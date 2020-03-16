import { add } from '../src/lesson1';

test("测试1+1", () => {
  expect(add(1, 1)).toBe(2)
})