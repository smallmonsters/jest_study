import React from 'react';
import { shallow } from 'enzyme';
import { findWrapper } from './../../../../utils/testUtil';
import TodoList from './../../index';

describe('ToDolist测试', () => {
  const listItem = "学习jest"
  test('初始化ToDoList', () => {
    const wrapper = shallow(<TodoList />)
    expect(wrapper.state("undoList")).toEqual([]);
  });
  test('ToDolist向header组件传递一个addUndoItem方法', () => {
    const wrapper = shallow(<TodoList />)
    const Header=wrapper.find("Header")
    expect(Header.prop("addUndoItem")).toEqual(wrapper.instance().addUndoItem);
  });
  test('header组件点击回车，undoList增加', () => {
    const wrapper = shallow(<TodoList />)
    const addUndoItem = wrapper.instance().addUndoItem
    addUndoItem(listItem)
    expect(wrapper.state("undoList")).toEqual([listItem]);
  });

});
