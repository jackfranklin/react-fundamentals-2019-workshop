import faker from 'faker'
import { format } from 'date-fns'

export const getRandomDate = () => {
  // https://date-fns.org/v1.30.1/docs/format
  return format(faker.date.recent(100), 'GGGG-MM-DD')
}
