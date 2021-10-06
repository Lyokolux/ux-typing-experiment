import { ALPHANUMERIC_LENGTH, CHUNK_SIZES, DESKTOP_SCREEN_MIN_WIDTH } from './const'
import type { ChunkLength, ExperienceConfig, Experiment } from './types'

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

export const getShuffledArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const getExperiencesConfigs = (): ExperienceConfig[] => {
  let config: ExperienceConfig[] = []

  CHUNK_SIZES.forEach(chunkLength => {
    config.push(
      {
        value: getGeneratedRandomString(ALPHANUMERIC_LENGTH),
        displayChunkLength: chunkLength,
        inputChunkLength: ALPHANUMERIC_LENGTH
      },
      {
        value: getGeneratedRandomString(ALPHANUMERIC_LENGTH),
        displayChunkLength: chunkLength,
        inputChunkLength: chunkLength
      },
      {
        value: getGeneratedRandomString(ALPHANUMERIC_LENGTH),
        displayChunkLength: ALPHANUMERIC_LENGTH,
        inputChunkLength: chunkLength
      }
    )
  })

  config.push(
    {
      value: getGeneratedRandomString(ALPHANUMERIC_LENGTH),
      displayChunkLength: ALPHANUMERIC_LENGTH,
      inputChunkLength: ALPHANUMERIC_LENGTH
    }
  )

  return getShuffledArray(config)
}

export const isScreenMobile = (): boolean => {
  return ('ontouchstart' in window) && (window.innerWidth <= DESKTOP_SCREEN_MIN_WIDTH || window.innerHeight <= DESKTOP_SCREEN_MIN_WIDTH)
}

export const isNumberInt = (n: number): boolean => {
  return n % 1 === 0
}

export const getChunkSizes = (): ChunkLength[] => {
  return [...CHUNK_SIZES, ALPHANUMERIC_LENGTH]
}

export const getFilteredEventsByTypes = (events: Experiment['events'], types: Experiment['events'][0]['type'][]): Experiment['events'] => {
  return events.filter(event => {
    return types.includes(event.type)
  })
}

export const getFilteredExperiencesByChunkSize = (
  experiments: Experiment[],
  chunkSize: number,
  filterBy: 'display' | 'input'
): Experiment[] => {
  return experiments.filter((experiment) => {
    return filterBy === 'input'
      ? experiment.id.endsWith(chunkSize.toString())
      : experiment.id.startsWith(chunkSize.toString())
  })
}
