import fetch from 'fetch-jsonp'

const wikipediaArticles = (query) => {
  const wikiAPIEndpoint = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
  return fetch(wikiAPIEndpoint + query)
    .then(resolve => resolve.json())
    .then((res) => {
      return Object.keys(res.query.pages).map(e => res.query.pages[e])
    })
}

export default wikipediaArticles
