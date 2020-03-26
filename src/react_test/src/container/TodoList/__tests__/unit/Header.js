import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { findWrapper } from './../../../../utils/testUtil';

describe('测试Header组件', () => {
  const value = "学习jest"
  const inputEvent = {
    target: {
      value: value
    }
  }
  test('Header组件应该包含一个input', () => {
    const wrapper = shallow(<Header />)
    const inputEle = findWrapper(wrapper, "input")
    expect(inputEle).toExist();
  });
  test('input初始值应该是空', () => {
    const wrapper = shallow(<Header />)
    const inputEle = findWrapper(wrapper, "input")
    expect(inputEle.prop("value")).toBe("");
  });
  test('输入值input的应该改变', () => {
    const wrapper = shallow(<Header />)
    const inputEle = findWrapper(wrapper, "input")
    inputEle.simulate("change", inputEvent)
    expect(wrapper.state("value")).toBe(value);
  });
  test('点击enter，input无内容，则无操作', () => {
    const wrapper = shallow(<Header />)
    const inputEle = findWrapper(wrapper, "input")
    const fn = jest.fn()
    wrapper.setState(() => ({ value: "" }))
    inputEle.simulate("keyUp", { keyCode: 13 })
    expect(fn).not.toHaveBeenCalled();
  });
  test('点击enter，触发addItem,清空input', () => {
    const fn = jest.fn()
    const wrapper = shallow(<Header addUndoItem={fn} />)
    const inputEle = findWrapper(wrapper, "input")
    wrapper.setState(() => ({ value: "1" }))
    inputEle.simulate("keyUp", { keyCode: 13 })
    expect(wrapper.state("value")).toBe("");
    expect(fn).toHaveBeenCalled();
  });
});
