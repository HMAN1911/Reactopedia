import wikipediaArticles from '../src/api'
import { nockWikiArticles } from './nocks'

describe('Wikipedia search endpoint', () => {
  it('should return an array of articles', () => {
  const query = 'test'
    nockWikiArticles(query)  
    return wikipediaArticles(query)
      .then((res) => {
        expect(res.length).toBeGreaterThan(1)
      })
  })
})
