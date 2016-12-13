import { put, call } from 'redux-saga/effects'
import * as types from '../actions/constants'
import wikipediaArticles from '../api/'

export default function* wikiSaga({ payload }) {
  const articles = yield call(wikipediaArticles, payload)
  yield put({ type: types.SEARCH_WIKI_SUCCESS, articles: articles })
}
