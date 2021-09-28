import { dev } from '$app/env'

export const KEY = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  shift: 'Shift',
  tab: 'Tab'
}

export const SEXES = ['m', 'f', 'no-answer', 'else'] as const
export const AGES = ['-15', '15-17', '18-24', '25-34', '35-44', '45-54', '55-64', '+65'] as const

export const QUALIFICATION = ['pleasant', 'unpleasant', 'simple', 'complicated', 'practical', 'not-practical', 'tedious', 'effective', 'good', 'bad', 'motivating', 'discouraging', 'any_experience', 'lot_of_experience'] as const
export type Qualification = typeof QUALIFICATION[number]

export const USER_COLLECTION_NAME = dev ? 'staging' : 'users'

export const CHUNK_SIZES = [2, 3, 4, 6, 9, 18] as const
export type ChunkSize = typeof CHUNK_SIZES[number]
