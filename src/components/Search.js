import React from 'react'

export const Search = ({setQuery, searchWiki}) => (
  <div>
    <input type="text" onChange={ (e) => setQuery(e.target.value) }/>
    <button onClick={ searchWiki }>Search</button>
  </div>
)
