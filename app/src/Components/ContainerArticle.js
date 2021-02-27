function ContainerArticle({ image, title, description, publishedDate }) {
  return (
    <section className="article">
      <img src={image} alt="news" className="article_image"/>
      <h2 className="article_title">{title}</h2>
      <p className="article_description">{description}</p>
      <p className="article_date">{publishedDate}</p>
    </section>
  )
}

export default ContainerArticle;

