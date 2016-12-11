import { searchWikiAction } from '../src/actions/wikiActions'
import reducer from '../src/reducers/'

const initialState = {
  query: ``,
  articles: []
}

describe('test reducers', () => {
  it('returns current state if action not known', () => {
    const action = {type: 'BOO'}
    expect(reducer(initialState, action)).toEqual(initialState);
  })

  it('populates the store with articles if request is successful', () => {
    const action = {type: 'SEARCH_WIKI_SUCCESS', articles: [{}, {}]}
    expect(reducer(initialState, action).articles.length).toBeGreaterThanOrEqual(1);
  })
})

