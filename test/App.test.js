import React from 'react'
import { shallow, mount } from 'enzyme'
import { connect } from 'react-redux'
import { App } from '../src/App'
import { Search } from '../src/components/Search'
import createStore from '../src/stores'

describe('test App component', () => {
  const store = createStore()
  const wrapper = mount(<App store={ store }/>)

  it('should have access to store', () => {
    expect(wrapper.props().store.getState()).toBeTruthy()
  })
})