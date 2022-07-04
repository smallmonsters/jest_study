import { getName } from "../getName"


describe('test1文件测试', () => {
  test("DOM文件测试", () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  })

  test("bob11", () => {
    expect(getName("bob11")).toBe("bob11")
  })
});


