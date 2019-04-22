import faker from 'faker'
import { getRandomDate } from '../../utils'

const posts = [
  {
    id: 1,
    title: 'A day at the beach',
    date: getRandomDate(),
    body: faker.lorem.paragraphs(),
  },
  {
    id: 2,
    title: 'Attended the React workshop',
    date: getRandomDate(),
    body: faker.lorem.paragraphs(),
  },
  {
    id: 3,
    title: 'Did a 5km run',
    date: getRandomDate(),
    body: faker.lorem.paragraphs(),
  },
  {
    id: 4,
    title: 'Birthday dinner for a friend',
    date: getRandomDate(),
    body: faker.lorem.paragraphs(),
  },
]

export default posts
