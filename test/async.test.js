import { fetchData, fetchData1, fetchErr } from "../src/async"

test.skip("回调函数异步", (done) => {
  fetchData((res) => {
    expect(res.data).toEqual({
      success: true
    })
    done()
  })
})
test.skip("promise异步", () => {
  return fetchData1().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
})

test.skip("测试404", () => {
  expect.assertions(1)
  return fetchErr().catch(e => {
    expect(e.toString().indexOf("404")).toBeGreaterThan(-1)
  })
})

test.skip("promise异步", () => {
  return expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test.skip("测试404", () => {
  expect.assertions(1)
  return expect(fetchErr()).rejects.toThrow()
})

test.skip("promise异步", async () => {
  await expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})

test("测试404", async () => {
  expect.assertions(1)
  await expect(fetchErr()).rejects.toThrow()
})