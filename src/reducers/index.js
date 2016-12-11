const wikiReducer = (state = {query: ``, articles: []}, action) => {
  
  switch(action.type) {
    case 'SEARCH_WIKI_SUCCESS':
      return {...state, articles: action.articles}
    default:
      return state
  }
}

export default wikiReducer