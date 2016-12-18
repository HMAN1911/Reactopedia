import React from 'react'

export const Search = ({ query, setQuery, searchWiki }) => (
  <div>
    <input type="text" value={ query } onChange={ (e) => setQuery(e.target.value) } />
    <button onClick={ searchWiki }>Search</button>
  </div>
)
