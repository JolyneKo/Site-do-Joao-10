import loading from '../Images/loading.gif'; 

function ContainerArticle({ image, title, description, publishedDate }) {
  return (
    <section className="article">
      <h2 className="article_title">{title}</h2>
      <img src={(image !== null) ? image : loading} alt="news" className="article_image"/>
      <p className="article_description">{description}</p>
      <p className="article_date">{publishedDate}</p>
    </section>
  )
}

export default ContainerArticle;

