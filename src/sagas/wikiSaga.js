import { put, call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as types from '../actions/constants'
import wikipediaArticles from '../api/'

export default function* wikiSaga({ payload }) {
  const {articles, timeout} = yield race({
    articles: call(wikipediaArticles, payload),
    timeout: call(delay, 5000)
  })

  if (articles)
    yield put({ type: types.SEARCH_WIKI_SUCCESS, articles: articles })
  else
    yield put({ type: types.SEARCH_WIKI_FAILURE })
}
