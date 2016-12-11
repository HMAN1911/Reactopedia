import * as types from './constants'

export const searchWikiAction = (query) => ({
  type: types.SEARCH_WIKI_REQUEST,
  payload: query
})
