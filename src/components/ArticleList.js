import React from 'react';
import './ArticleList.css'
import ArticleCard from './ArticleCard';

const ArticleList = (props) => {
  const articles=props.articles.map( article => {
  return <ArticleCard key={article.id} article={article.urlToImage} author={article.source.name} time={article.publishedAt}
  title={article.title} url={article.url}/>

});

  return <div className="article-list">{articles}</div>;
};

export default ArticleList;
