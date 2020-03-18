import { getConfig } from "../src/demo3";

test('测试getConfig', () => {
  expect(getConfig()).toMatchSnapshot();
});