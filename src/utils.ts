export const getChunk = (str: string, size: number): string[] => {
  return str.match(new RegExp('.{1,' + size + '}', 'g'))
}

export const reverseArray = <T>(arr: T[]): T[] => {
  return [].concat(arr).reverse()
}

// from https://1loc.dev/ → Generate a random string with given length
export const getGeneratedRandomString = (length = 18): string => Array(length).fill('').map(() => {
  return Math.random().toString(36).charAt(2)
}).join('')
  .toUpperCase()
