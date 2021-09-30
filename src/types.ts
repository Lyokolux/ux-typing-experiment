import type { SEXES, AGES } from './const'
import type { ChunkLength, ALPHANUMERIC_LENGTH } from './const'
// @ts-ignore
import type { Question } from './components/QuestionsForm/QuestionsForm.svelte'

export type Sexe = typeof SEXES[number]
export type Age = typeof AGES[number]

// -----
//  API
// -----

// TODO
export interface User {
    sexe: Sexe
    age: Age
    anyExperience: number
    experienceGrades: Pick<Question, 'ids' | 'grade'>[]
}

// TODO
export interface Experiment {

}

export interface ExperienceConfig {
  value: string
  displayChunkLength: ChunkLength | typeof ALPHANUMERIC_LENGTH
  inputChunkLength: ChunkLength | typeof ALPHANUMERIC_LENGTH
}
