import React from 'react'

export const Articles = ({ articles }) => (
  <div>
    {articles ? articles.map(article => <p>{article.title}</p>) : null}
  </div>
)