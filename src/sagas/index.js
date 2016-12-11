import { fork } from 'redux-saga/effects'
import watchSearcWiki from './watchers'

export default function* rootSaga() {
  yield fork(watchSearcWiki)
}
