import type { SEXES, AGES } from './const'
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
