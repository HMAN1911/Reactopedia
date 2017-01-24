import React from 'react'

export const Article = ({ article }) => (
    <div>
      <p>{article.title}</p>
      <img src={article.thumbnail ? article.thumbnail.source : null} alt=""/>
    </div> 
)
