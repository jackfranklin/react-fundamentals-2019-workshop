/* global __dirname */

import faker from 'faker'
import { getRandomDate } from '../utils'
import fs from 'fs'
import path from 'path'
import existingDb from './db.json'

if (!(existingDb.posts && existingDb.posts.length > 0)) {
  console.log('Writing new posts to fake DB')
  const posts = [
    {
      id: 1,
      title: 'A day at the beach',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 2,
      title: 'Attended the React workshop',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 3,
      title: 'Did a 5km run',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 4,
      title: 'Birthday dinner for a friend',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 5,
      title: 'Played football in the park',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 6,
      title: 'Watched the new Game of Thrones!',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
    {
      id: 7,
      title: 'Checked my credit score',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
    },
  ]

  fs.writeFile(
    path.join(__dirname, 'db.json'),
    JSON.stringify(
      {
        posts: posts,
      },
      null,
      4
    ),
    err => {
      console.log('Wrote posts', err)
    }
  )
}
