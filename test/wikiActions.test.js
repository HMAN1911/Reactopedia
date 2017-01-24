import { searchWikiAction, setQueryAction } from '../src/actions/wikiActions'

describe('Test for searchWikiAction', () => {
  const query = 'banana'
  
  it('should return a plain js object', () => {
    expect(typeof searchWikiAction(query)).toEqual('object')
  })

  it('should be an action with type search wiki request', () => {
    const action = searchWikiAction(query)
    expect(action.type).toEqual('SEARCH_WIKI_REQUEST')
  })

  it('should contain the search query', () => {
    const action = searchWikiAction(query)
    expect(action.payload).toEqual(query)
  })
  
})

describe('Test for setQueryAction', () => {
  const query = 'banana'

  it('should be an action with type setQuery', () => {
    const action = setQueryAction(query)
    expect(action.type).toEqual('SET_QUERY')
  })

  it('should contain the search query', () => {
    const action = setQueryAction(query)
    expect(action.query).toEqual(query)
  })

})
