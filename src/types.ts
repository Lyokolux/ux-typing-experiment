import type { SEXES, AGES, QUALIFICATION, CHUNK_SIZES } from './const'
import type { ALPHANUMERIC_LENGTH } from './const'
// @ts-ignore
import type { Question } from './components/QuestionsForm/QuestionsForm.svelte'
import type { Event } from './components/AlphanumericInput/utils'

// ------------
//  User infos
// ------------
export type Sexe = typeof SEXES[number]
export type Age = typeof AGES[number]
export type Qualification = typeof QUALIFICATION[number]

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
