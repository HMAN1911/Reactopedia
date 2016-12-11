import { fork } from 'redux-saga/effects'
import rootSaga from '../src/sagas'
import watchSearchWiki from '../src/sagas/watchers'
import wikiSaga from '../src/sagas/wikiSaga'

describe('Test rootSaga', () => {
  
  it('should yield array watchers saga', () => {

    expect(rootSaga().next().value).toEqual(fork(watchSearchWiki))
  })
})
