import ArticleCard from './components/ArticleCard'
import drawers from '../assets/images/drawers.jpg'
import avatarMichelle from '../assets/images/avatar-michelle.jpg'

const article = {
  title:
    'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
  description:
    'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
  image: {
    src: drawers,
    alt: 'A green chest of drawers with a vase of dried pampas grass and framed prints on top',
  },
  author: {
    name: 'Michelle Appleton',
    avatar: avatarMichelle,
  },
  date: {
    label: '28 Jun 2020',
    iso: '2020-06-28',
  },
}

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Article preview component</h1>
      <ArticleCard {...article} />
    </main>
  )
}

export default App
