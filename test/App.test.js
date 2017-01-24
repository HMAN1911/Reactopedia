import React from 'react'
import { shallow, mount } from 'enzyme'
import { connect, Provider } from 'react-redux'
import { App } from '../src/App'
import { Search } from '../src/components/Search'
import createStore from '../src/stores'

describe('test App component', () => {
  const store = createStore()
  const wrapper = mount(<Provider store={ store } children={<App />}/>)

  it('should have access to store', () => {
    expect(wrapper.props().store.getState()).toBeTruthy()
  })

  it('should render a Search component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Search).length).toEqual(1)
  })
})
