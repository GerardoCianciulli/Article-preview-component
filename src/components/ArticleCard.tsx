import AuthorInfo from './AuthorInfo'
import ShareMenu from './ShareMenu'
import './ArticleCard.css'

type ArticleCardProps = {
  title: string
  description: string
  image: { src: string; alt: string }
  author: { name: string; avatar: string }
  date: { label: string; iso: string }
}

function ArticleCard({ title, description, image, author, date }: ArticleCardProps) {
  return (
    <article className="card">
      <img className="card__image" src={image.src} alt={image.alt} width={660} height={528} />

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>

        <footer className="card__footer">
          <AuthorInfo name={author.name} avatar={author.avatar} date={date.label} dateTime={date.iso} />
          <ShareMenu title={title} imageUrl={image.src} />
        </footer>
      </div>
    </article>
  )
}

export default ArticleCard
