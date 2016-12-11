import { searchWikiAction } from '../src/actions/wikiActions'
import reducer from '../src/reducers/'
import * as types from '../src/actions/constants'

const initialState = {
  query: ``,
  articles: []
}

describe('test reducers', () => {
  it('returns current state if action not known', () => {
    const action = {type: 'BOO'}
    expect(reducer(initialState, action)).toEqual(initialState);
  })

  it('populates the query when SET QUERY action is dispatched', () => {
    const action = {type: types.SET_QUERY, query: 'test query'}
    expect(reducer(initialState, action).query).toEqual('test query');
  })

  it('populates the store with articles if request is successful', () => {
    const action = {type: types.SEARCH_WIKI_SUCCESS, articles: [{}, {}]}
    expect(reducer(initialState, action).articles.length).toEqual(2);
  })
})

