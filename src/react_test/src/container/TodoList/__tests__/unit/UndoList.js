import React from 'react';
import { shallow } from 'enzyme';
import { findWrapper } from './../../../../utils/testUtil';
import UndoList from '../../components/UndoList';


describe('UndoList测试', () => {
  const itemList = [
    { status: "div", value: "" }
  ]
  test('初始化页面渲染测试', () => {
    const wrapper = shallow(<UndoList itemList={itemList} />)
    const itemTotalSpan = findWrapper(wrapper, "itemTotal")
    const itemLi = findWrapper(wrapper, "itemLi")
    expect(itemTotalSpan.text()).toBe(itemList.length);
    expect(itemLi.length).toBe(itemList.length);
  });
});
