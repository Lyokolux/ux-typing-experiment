import { dev } from '$app/env'

export const KEY = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  shift: 'Shift',
  tab: 'Tab'
}
export const ALPHANUMERIC_LENGTH = 18

export const SEXES = ['m', 'f', 'no-answer', 'else'] as const
export const AGES = ['-15', '15-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'] as const

export const USER_COLLECTION_NAME = dev ? 'staging' : 'users-2'

export const CHUNK_SIZES = [2, 3, 4, 6, 9] as const

export const ALPHANUMERIC_REGEX = /^[0-9a-zA-Z]+$/gi
export const NON_ALPHANUMERIC_REGEX = /[^0-9a-zA-Z]/gi

export const EXPERIENCES_AMOUNT = 16
export const DESKTOP_SCREEN_MIN_WIDTH = 992
export const FIRST_EXPERIENCES_PAGE_INDEX = 10
