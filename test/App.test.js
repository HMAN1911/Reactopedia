import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

describe('test App component', () => {
  const wrapper = shallow(<App />)

  it('should contain a div', () => {
    
    expect(wrapper.find('div')).toBeTruthy();
  })

  
})