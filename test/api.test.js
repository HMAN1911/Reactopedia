import wikipediaArticles from '../src/api'
import nock from 'nock'

describe('Wikipedia search endpoint', () => {
  it('should return an array of articles', () => {  
    const query = 'test'
    nock(/wikipedia/)
      .get(new RegExp(query))
      .reply(200, {
        query: {
          pages: {
            1111: {},
            2222: {}
          }
        }
      })
    return wikipediaArticles(query)
      .then((res) => {
        expect(res.length).toBeGreaterThan(1)
      })
  })

})

