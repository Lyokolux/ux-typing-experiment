export const chunk = (str: string, size: number): string[] => {
  return str.match(new RegExp('.{1,' + size + '}', 'g'));
}

export const isNumeric = (n: string): boolean => {
  // @ts-ignore
  return !isNaN(parseFloat(n)) && isFinite(n)
}

export const removeAllNonNumeric = (str: string): string => {
  return str.replace(/\D/g, '')
}

export const reverseArray = <T>(arr: T[]): T[] => {
  return [].concat(arr).reverse()
}
