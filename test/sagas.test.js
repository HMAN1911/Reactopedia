import { fork, put, call, race } from 'redux-saga/effects'
import rootSaga from '../src/sagas'
import watchSearchWiki from '../src/sagas/watchers'
import wikiSaga from '../src/sagas/wikiSaga'
import wikipediaArticles from '../src/api/'

describe('Test rootSaga', () => {
  it('should yield array watchers saga', () => {
    expect(rootSaga().next().value).toEqual(fork(watchSearchWiki))
  })
})

describe('Test wikiSaga', () => {
  const payload = 'test'
  const gen = wikiSaga({ payload })
  it('should RACE wikipedia with given payload', () => {
    expect(gen.next(payload).value['RACE']).toBeTruthy()
  })
  
})
