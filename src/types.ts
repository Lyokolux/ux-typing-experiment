import type {
  SEXES,
  AGES,
  ALPHANUMERIC_LENGTH,
  CHUNK_SIZES
} from './const'
// @ts-ignore
import type { Question } from './components/QuestionsForm/QuestionsForm.svelte'
import type { Event } from './components/AlphanumericInput/utils'

// ------------
//  User infos
// ------------
export type Sexe = typeof SEXES[number]
export type Age = typeof AGES[number]
export type Qualification = 'pleasant' | 'unpleasant' | 'simple' | 'complicated' | 'practical' | 'not-practical' | 'tedious' | 'effective' | 'good' | 'bad' | 'motivating' | 'discouraging' | 'any_experience' | 'lot_of_experience' | 'nice' | 'not-nice'

// ------------
//  Experience
// ------------
export type ChunkLength = typeof CHUNK_SIZES[number] | typeof ALPHANUMERIC_LENGTH
export interface ExperienceConfig {
  value: string
  displayChunkLength: ChunkLength | typeof ALPHANUMERIC_LENGTH
  inputChunkLength: ChunkLength | typeof ALPHANUMERIC_LENGTH
}

// -----
//  API
// -----
/** Format: "chunkLength of the display" - "chunk length of the inputs" */
export type ExperimentID = `${ChunkLength}-${ChunkLength}`
export type Experiment = {
  id: ExperimentID,
  events: Event[],
  questions: Pick<Question, 'ids' | 'grade'>[]
}

export interface User {
    sexe: Sexe
    age: Age
    anyExperience: number
    device: 'mobile' | 'desktop'
    experienceGrades: Pick<Question, 'ids' | 'grade'>[]
    experiments?: Experiment[]
}
