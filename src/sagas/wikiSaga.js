import { put, call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as types from '../actions/constants'
import wikipediaArticles from '../api/'

const timeoutWaitMS = 7000

export default function* wikiSaga({ payload }) {
  try {
    const { articles, timeout } = yield race({
      articles: call(wikipediaArticles, payload),
      timeout: call(delay, timeoutWaitMS)
    })
    if (articles)
      yield put({ type: types.SEARCH_WIKI_SUCCESS, articles: articles })
    if (timeout)
      yield put({ type: types.SEARCH_WIKI_TIMEOUT })
  }

  catch(err) {
    yield put({ type: types.SEARCH_WIKI_FAILURE })
  }
}
