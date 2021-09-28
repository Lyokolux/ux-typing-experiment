export const KEY = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  shift: 'Shift',
  tab: 'Tab'
}

export const QUALIFICATION = ['pleasant', 'unpleasant', 'simple', 'complicated', 'practical', 'not-practical', 'tedious', 'effective', 'good', 'bad', 'motivating', 'discouraging'] as const
export type Qualification = typeof QUALIFICATION[number]
