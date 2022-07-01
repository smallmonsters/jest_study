import { getName } from "../getName"

test("About文件测试", () => {
  expect(getName("bob")).toBe("bob")
})