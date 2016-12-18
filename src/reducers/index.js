import * as types from '../actions/constants'

const initialState = { query: ``, articles: [], loading: false }

const wikiReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case types.SEARCH_WIKI_SUCCESS:
      return {...state, articles: action.articles, loading: false}
    case types.SET_QUERY:
      return {...state, query: action.query}
    case types.SEARCH_WIKI_FAILURE:
      return {...state, loading: false}
    case types.SEARCH_WIKI_REQUEST:
      return {...state, loading: true, query: ``}
    default:
      return state
  }
}

export default wikiReducer
