/* global __dirname */

import faker from 'faker'
import { getRandomDate } from '../utils'
import fs from 'fs'
import path from 'path'
import existingDb from './db.json'

const randomTrueOrFalse = () => !!(Math.random() < 0.5)

console.log('got existing DB', existingDb)

if (!(existingDb.posts && existingDb.posts.length > 0)) {
  console.log('Writing new posts to fake DB')

  const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' },
    { id: 3, name: 'charlotte' },
  ]

  const posts = [
    {
      id: 1,
      title: 'A day at the beach',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['journal'],
    },
    {
      id: 2,
      title: 'Attended the React workshop',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['react'],
    },
    {
      id: 3,
      title: 'Did a 5km run',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['exercise'],
    },
    {
      id: 4,
      title: 'Birthday dinner for a friend',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['journal'],
    },
    {
      id: 5,
      title: 'Played football in the park',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['exercise'],
    },
    {
      id: 6,
      title: 'Watched the new Game of Thrones!',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['tv'],
    },
    {
      id: 7,
      title: 'Checked my credit score',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['money'],
    },
    {
      id: 8,
      title: 'Watched the 2018 world cup higlights again',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['sport'],
    },
    {
      id: 9,
      title: 'Went to a cracking react workshop',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['react'],
    },
    {
      id: 10,
      title: 'did some tweeting',
      date: getRandomDate(),
      body: faker.lorem.paragraphs(),
      userId: faker.random.number(3),
      published: randomTrueOrFalse(),
      tags: ['thought-leader'],
    },
  ]

  fs.writeFile(
    path.join(__dirname, 'db.json'),
    JSON.stringify(
      {
        posts: posts,
        users: users,
      },
      null,
      4
    ),
    err => {
      console.log('Wrote posts', err)
    }
  )
}
