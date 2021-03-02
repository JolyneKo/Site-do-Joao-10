import ContainerArticle from './ContainerArticle';

function Notícias({ articles }) {
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

  return articleInfo;
}

export default Notícias;