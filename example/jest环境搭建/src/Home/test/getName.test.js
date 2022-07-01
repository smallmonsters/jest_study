import { getName } from "../getName"


describe('Home文件测试', () => {
  test("bob1", () => {
    expect(getName("bob1")).toBe("bob1")
  })

  test("bob11", () => {
    expect(getName("bob11")).toBe("bob11")
  })
});


