import rootSaga from '../src/sagas'
import wikiSaga from '../src/sagas/wikiSaga'
import watchSearchWiki from '../src/sagas/watchers'
import { takeLatest } from 'redux-saga'
import { take, fork, put } from 'redux-saga/effects'

describe('test for rootSaga', () => {

  it('should yield watchSearchWiki', () => {
    const generator = rootSaga()
    expect(generator.next().value).toEqual(fork(watchSearchWiki))
  })
})

describe('test for watchSearchWiki', () => {

  it('should call wikiSaga', () => {
    const generator = watchSearchWiki()
    expect(generator.next().value).toEqual(take('SEARCH_WIKI_REQUEST', wikiSaga))
  })
})

describe('Test for wikiSaga', () => {
  const payload = 'test'
  const gen = wikiSaga({ payload })
  it('should RACE wikipedia with given payload', () => {
    expect(gen.next(payload).value['RACE']).toBeTruthy()
  })

  it('should dispatch search failure', () => {
    const expectedAction = {type: "SEARCH_WIKI_FAILURE"}
    expect(gen.next().value).toEqual(put(expectedAction))
  })

  it('should dispatch a timeout', () => {
    const payload = {
      payload: 'test'
    }
    const gen = wikiSaga(payload)
    const expectedAction = {type: "SEARCH_WIKI_TIMEOUT"}
    gen.next({})
    expect(gen.next({timeout: true}).value).toEqual(put(expectedAction))
  })

  it('should dispatch a error if unexpected value in payload', () => {
    const payload = {
      payload: 'test'
    }
    const gen = wikiSaga(payload)
    const expectedAction = {type: "SEARCH_WIKI_FAILURE"}
    gen.next({})
    expect(gen.next().value).toEqual(put(expectedAction))
  })
})
