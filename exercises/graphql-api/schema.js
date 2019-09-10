const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql')

const { users, posts } = require('../api/db.json')

const stringResolver = key => ({
  [key]: {
    type: GraphQLNonNull(GraphQLString),
    resolve: x => x[key],
  },
})

const idResolver = () => ({
  id: {
    type: GraphQLNonNull(GraphQLID),
    resolve: x => x.id,
  },
})

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    ...idResolver(),
    ...stringResolver('name'),
    lastLogInTime: {
      type: GraphQLInt,
      resolve: user => user.lastLogInTime,
    },
    posts: {
      type: GraphQLNonNull(GraphQLList(PostType)),
      resolve: user => posts.filter(p => p.userId === user.id),
    },
  }),
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'A blog post written by a user',
  fields: () => ({
    ...idResolver(),
    ...stringResolver('title'),
    ...stringResolver('date'),
    ...stringResolver('body'),
    published: {
      type: GraphQLNonNull(GraphQLBoolean),
      resolve: post => post.published,
    },
    tags: {
      type: GraphQLNonNull(GraphQLList(GraphQLString)),
      resolve: post => post.tags,
    },
    user: {
      type: GraphQLNonNull(UserType),
      resolve: post => users.find(u => u.id === post.userId),
    },
  }),
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      posts: {
        type: GraphQLNonNull(GraphQLList(PostType)),
        resolve: (root, args) => {
          return posts
        },
      },
      userById: {
        type: UserType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve: (root, args) => {
          return users.find(u => String(u.id) === args.id)
        },
      },
      users: {
        type: GraphQLNonNull(GraphQLList(UserType)),
        resolve: (root, args) => {
          return users
        },
      },
    }),
  }),
})
