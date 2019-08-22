import importAll from 'import-all.macro'

export const reactExercises = importAll.sync('./react/*/index.js')

console.log('reactExercises', reactExercises)
