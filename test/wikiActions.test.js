import { searchWikiAction } from '../src/actions/wikiActions'

describe('Test for Action creators', () => {
  const query = 'banana bread'
  
  it('should return a plain js object', () => {
    expect(typeof searchWikiAction(query)).toEqual('object')
  })

  it('should be an action with type search wiki request', () => {
    const action = searchWikiAction(query)
    expect(action.type).toEqual('SEARCH_WIKI_REQUEST')
  })

  it('should contain the search query', () => {
    const action = searchWikiAction(query)
    expect(action.query).toEqual(query)
  })
  
})
