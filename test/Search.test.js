import React from 'react'
import { shallow, mount } from 'enzyme'
import { Search } from '../src/components/Search'

describe('test Search Component', () => {
  const wrapper = mount(<Search />)

  it('should render without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should have an input element in it', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

})