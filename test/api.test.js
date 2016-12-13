import wikipediaArticles from '../src/api'
import nock from 'nock'

const query = 'test'
var wikipedia = nock('http://en.wikipedia.org')
                .get('/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=pageimages%7Cextracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=test')
                .reply(200, {
                  query: {
                    pages: {
                      1111: {},
                      2222: {}
                    }
                  }
                })

describe('Wikipedia search endpoint', () => {
  it('should return an array of articles', () => {
    
    return wikipediaArticles(query)
      .then((res) => {
        expect(res.length).toBeGreaterThan(1)
      })
  })
})