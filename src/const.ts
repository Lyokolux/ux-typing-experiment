import { dev } from '$app/env'

export const KEY = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  shift: 'Shift',
  tab: 'Tab'
}

export const QUALIFICATION = ['pleasant', 'unpleasant', 'simple', 'complicated', 'practical', 'not-practical', 'tedious', 'effective', 'good', 'bad', 'motivating', 'discouraging', 'any_experience', 'lot_of_experience'] as const
export type Qualification = typeof QUALIFICATION[number]

export const USER_COLLECTION_NAME = dev ? 'staging' : 'users'
