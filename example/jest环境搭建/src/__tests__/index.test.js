const math = require("../index")
const {
  add
} = math

test("测试1+1", () => {
  expect(add(1, 1)).toBe(2)
})