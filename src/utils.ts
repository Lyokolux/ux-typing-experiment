export const getChunk = (str: string, size: number): string[] => {
  return str.replace(' ', '').match(new RegExp('.{1,' + size + '}', 'g'))
}

export const reverseArray = <T>(arr: T[]): T[] => {
  return [].concat(arr).reverse()
}
