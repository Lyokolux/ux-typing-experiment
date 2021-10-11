import type { ChunkLength } from '../../types'
import { ALPHANUMERIC_LENGTH, CHUNK_SIZES } from '../../const'

export const getChartCategories = (): ChunkLength[] => {
  return [...CHUNK_SIZES, ALPHANUMERIC_LENGTH]
}
