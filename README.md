## What is this?

This is my re-creation of Reactopedia using React, Redux, and Redux-Sagas.

## Installation


run yarn in project root
```
yarn
```

yarn start to fire her up
```
yarn start
```

yarn test to run all tests
```
yarn test
```

## Notes

There is a small issue with the request to wikipedia's search API. It does not support CORS, so JSONP was brought in. Unfortunately, that does not play well with the http mock package. For now, change 
```
import fetch from 'fetch-jsonp'
```
to 
```
import fetch from 'isomorphic-fetch'
```
while testing.