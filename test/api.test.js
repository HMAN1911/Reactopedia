import wikipediaArticles from '../src/api'
import nock from 'nock'



describe('Wikipedia search endpoint', () => {
  it('should return an array of articles', () => {  
    const query = 'test'
    nock(/wikipedia/)
      .get(/test/)
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
        console.log(res)
        expect(res.length).toBeGreaterThan(1)
        nock.cleanAll()
      })
  })

  it('should return an array of articles', () => {  
    const query = 'test'
    return wikipediaArticles(query)
      .then((res) => {
        console.log(res)
        expect(res.length).toBeGreaterThan(1)
      })
  })
})

