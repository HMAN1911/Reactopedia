import { takeLatest } from 'redux-saga'
import wikiSaga from './wikiSaga'
import * as types from '../actions/constants'

export default function* watchSearcWiki() {
  yield* takeLatest(types.SEARCH_WIKI_REQUEST, wikiSaga)
}
