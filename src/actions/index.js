export const HELLO_WORLD = 'HELLO_WORLD'
export const FILTER = 'FILTER'

export const helloWorld = () => {
  return {
    type: HELLO_WORLD
  }
}

export const filter = x => {
  return {
    type: FILTER,
    filter: x
  }
}
