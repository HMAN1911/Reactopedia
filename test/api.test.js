import wikipediaArticles from '../src/api'
import { nockWikiArticles } from './nocks'

const query = 'test'

describe('Wikipedia search endpoint', () => {
  it('should return an array of articles', () => {  
    nockWikiArticles(query)
    return wikipediaArticles(query)
      .then((res) => {
        expect(res.length).toBeGreaterThan(1)
      })
  })
})
