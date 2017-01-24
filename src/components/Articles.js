import React from 'react'
import { Article } from './Article'

export const Articles = ({ articles }) => (
  <div>
    {articles ? articles.map((article, i) => <Article key={i} article={article}/>) : null}
  </div>
)
