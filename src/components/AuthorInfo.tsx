type AuthorInfoProps = {
  name: string
  avatar: string
  date: string
  dateTime: string
}

function AuthorInfo({ name, avatar, date, dateTime }: AuthorInfoProps) {
  return (
    <div className="author">
      <img className="author__avatar" src={avatar} alt="" width={40} height={40} />
      <div>
        <p className="author__name">{name}</p>
        <time className="author__date" dateTime={dateTime}>
          {date}
        </time>
      </div>
    </div>
  )
}

export default AuthorInfo
