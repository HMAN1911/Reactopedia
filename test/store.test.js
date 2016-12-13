import createStore from '../src/stores'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import wikipediaArticles from '../src/api'
import { searchWikiAction } from '../src/actions/wikiActions'

describe('test store', () => {

  it('should return state object when asked', () => {
    let store = createStore()
    expect(typeof store.getState()).toEqual('object')
  })

  it('should understand SET_QUERY action', () => {
    let store = createStore()
    store.dispatch( {type: 'SET_QUERY', query: 'test'} )
    expect(store.getState()).toEqual({ query: 'test', articles: [] })
  })

  it('should understand SEARCH_WIKI_REQUEST action', () => {
    let sagaMiddleware = createSagaMiddleware()
    let mockStore = configureMockStore([sagaMiddleware])
    let store = mockStore({})
    store.dispatch( searchWikiAction('test'))
    expect(store.getActions()).toEqual([{"payload": "test", "type": "SEARCH_WIKI_REQUEST"}])
  })
  
})
