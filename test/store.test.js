import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { searchWikiAction, setQueryAction } from '../src/actions/wikiActions'
import * as types from '../src/actions/constants'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

describe('test store', () => {

  it('should receive dispatch action for set query', () => {
    const store = mockStore({})
    const expectedValue = {
      type: types.SET_QUERY,
      query: 'banana'
    }
    store.dispatch(setQueryAction('banana'))
    expect(store.getActions()).toEqual([expectedValue])
  })
  
})
