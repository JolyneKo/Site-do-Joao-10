import { useState } from 'react';
import '../SCSS/main.scss';
import ContainerArticle from './ContainerArticle';

function Main() {

  const [articles, setArticles] = useState([]);

  const articleInfo = articles.map((article, key) => {
    const { urlToImage: image, title, description, publishedAt} = article;
    return (
      <ContainerArticle 
        image={image} title={title} 
        description={description} 
        publishedDate={publishedAt}
        key={key + 1}
      />
    )
  });

  fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95039c3e033340cbbfbb34114d1f4771')
    .then(res => res.json())
    .then(json => setArticles(json.articles))
    .catch(error => console.log(error))

  return (
    <main className="main">
      {articleInfo}
    </main>
  )
}

export default Main;