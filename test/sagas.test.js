// the saga generators return plain js objects that describe what effect we want to happen.
// for instance, a PUT will dispatch an action with the object contained
// and a call will simply call the provided function.
// this lets us test easily.

// import test from 'tape';

// import { put, call } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
// import { incrementAsync } from './sagas'

// test('incrementAsync Saga test', (assert) => {
//   const gen = incrementAsync()

//   assert.deepEqual(
//     gen.next().value,
//     call(delay, 1000),
//     'incrementAsync Saga must call delay(1000)'
//   )

//   assert.deepEqual(
//     gen.next().value,
//     put({type: 'INCREMENT'}),
//     'incrementAsync Saga must dispatch an INCREMENT action'
//   )

//   assert.deepEqual(
//     gen.next(),
//     { done: true, value: undefined },
//     'incrementAsync Saga must be done'
//   )

//   assert.end()
// });

import { fork, put, call } from 'redux-saga/effects'
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
  const payload = 'test';
  const gen = wikiSaga({ payload });
  it('should call wikipedia with given payload', () => {
    expect(gen.next(payload).value).toEqual(call(wikipediaArticles, payload))
  })
  
})
