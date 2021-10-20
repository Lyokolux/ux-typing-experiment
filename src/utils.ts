import {
  ALPHANUMERIC_LENGTH,
  CHUNK_SIZES,
  DESKTOP_SCREEN_MIN_WIDTH,
  NON_ALPHANUMERIC_REGEX
} from './const'
import type {
  ChunkLength, ExperienceConfig, Experiment
} from './types'
import type { User } from './types'

export const getChunk = (str: string, size: number): string[] => {
  return str.match(new RegExp('.{1,' + size + '}', 'g'))
}

export const reverseArray = <T>(arr: T[]): T[] => {
  return [].concat(arr).reverse()
}

export const isDefined = (val: any): boolean => val !== undefined && val !== null

export const isAlphanumeric = (str: string): boolean => {
  return str.match(NON_ALPHANUMERIC_REGEX) === null
}

export const getWithAlphanumericOnly = (str: string): string => {
  return str.replace(NON_ALPHANUMERIC_REGEX, '')
}

// from https://1loc.dev/ → Generate a random string with given length
export const getGeneratedRandomString = (length = 18): string => Array(length).fill('').map(() => {
  return Math.random().toString(36).charAt(2)
}).join('')
  .toUpperCase()

export const getShuffledArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length
  let randomIndex: number

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const getAverage = (array: number[]) => {
  return array.filter(elmt => {
    return typeof elmt === 'number'
  }).reduce((a, b) => a + b, 0) / array.length
}

export const getRandomInArray = <T extends readonly any[]>(array: T): T[number] => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
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

export const getExperienceIds = (): string[] => {
  return getExperiencesConfigs().map(config => {
    return `${config.displayChunkLength}-${config.inputChunkLength}`
  }).sort()
}

export const getUserDevice = (hasTouchStart: boolean, width: number, height: number): User['device'] => {
  return hasTouchStart
  && (width <= DESKTOP_SCREEN_MIN_WIDTH || height <= DESKTOP_SCREEN_MIN_WIDTH) ? 'mobile' : 'desktop'
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

export const getRandomAlphaCharacter = (amount: number):string => (
  Math.random().toString(36).slice(amount)
)
