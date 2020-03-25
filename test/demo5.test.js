// __mocks__下没有util.js,就会自动把类的构造函数和方法或函数mock化
jest.mock("../src/util.js")

import Util from '../src/util';
import {doSomething} from '../src/demo5';

test('测试doSomething', () => {
  doSomething(222,333)
  console.log(Util.mock.instances[0].a.mock)
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
});