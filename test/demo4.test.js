jest.mock("axios")

import axios from 'axios';


const { fetchData } = jest.requireActual('../src/demo4')

// __mocks__要与源文件同级,切mock文件名要与源文件一致
const { fetchData1 } = jest.requireMock('../src/demo4')
// 同等 
// jest.mock("../src/demo4")
// import { fetchData1 } from '../src/demo4';

test('测试fetchData', () => {
  axios.get.mockResolvedValue({ data: "aaa" })
  return fetchData().then(res => {
    expect(res).toBe("aaa")
  })
});
test('测试fetchData1', () => {
  return fetchData1().then(res => {
    expect(res).toBe("321")
  })
});
