import type { ChunkLength, Experiment } from '../../types'
import { ALPHANUMERIC_LENGTH, CHUNK_SIZES } from '../../const'

export const getChartCategories = (): ChunkLength[] => {
  return [...CHUNK_SIZES, ALPHANUMERIC_LENGTH]
}

export const getExperienceDuration = (experience: Experiment): number => {
  return Number(experience.events[experience.events.length - 1].ms / 1000)
}
