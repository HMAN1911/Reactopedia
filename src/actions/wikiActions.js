import * as types from './constants'

export const searchWikiAction = (query) => ({
  type: types.SEARCH_WIKI_REQUEST,
  payload: query
})

export const setQueryAction = (value) => ({
  type: types.SET_QUERY,
  query: value
})
