
// from https://1loc.dev/ → Generate a random string with given length
export const generateRandomString = (length=18): string => Array(length).fill('').map(() => Math.random().toString(36).charAt(2)).join('').toUpperCase()
