import { put } from 'redux-saga/effects'
import * as types from '../actions/constants'

export default function* wikiSaga() {
  yield put({ type: types.SEARCH_WIKI_SUCCESS, articles: [{}, {}] })
}