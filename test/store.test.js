import createStore from '../src/stores'

describe('test store', () => {

  const store = createStore()

  it('should return state object when asked', () => {
    console.log(store.getState())
    expect(typeof store.getState()).toEqual('object')
  })

  it('should understand SET_QUERY action', () => {
    store.dispatch( {type: 'SET_QUERY', query: 'test'} )
    expect(store.getState()).toEqual({ query: 'test', articles: [] })
  })
})