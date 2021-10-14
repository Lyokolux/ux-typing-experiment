<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
  import type {
    Sexe, Age, User, Experiment
} from '../../types'
  import type { Question } from '../../components/QuestionsForm/QuestionsForm.svelte'

  export interface UserInfos {
    sexe: Sexe
    age: Age
    anyExperience: number
    experienceGrades: Pick<Question, 'ids' | 'grade'>[]
    experiments: Experiment[]
  }
</script>
<script lang="ts">
  import * as yup from 'yup'
  import { _ } from 'svelte-i18n'

  import { AGES, SEXES } from '../../const'
  import { user, screen } from '../../stores'
  import { isDefined } from '../../utils'
  import Page from '../../components/Page.svelte'
  import SexeQuestion from './questions/Sexe.svelte'
  import AgeQuestion from './questions/Age.svelte'
  import AnyExperience from './questions/AnyExperience.svelte'
  import FormErrors from './FormErrors.svelte'
  import ExperienceGrade from './questions/ExperienceGrade.svelte'
  import NextButton from '../../components/NextButton.svelte'

  let userInfos: Partial<UserInfos> = {}
  let errors: string[] = []

  const schema = yup.object().shape({
    sexe: yup.mixed().oneOf([...SEXES]).required($_('user_infos.sexe.is_required')),
    age: yup.mixed().oneOf([...AGES]).required($_('user_infos.age.is_required')),
    anyExperience: yup.number().min(0).max(6).required()
  })

  const onSubmit = (): void => {
    schema.validate(userInfos).then(() => {
      const payload: User = {
        age: userInfos.age,
        sexe: userInfos.sexe,
        anyExperience: userInfos.anyExperience,
        device: $screen.device,
        experienceGrades: userInfos.experienceGrades.map((experienceGrade) => ({
          ids: experienceGrade.ids,
          grade: experienceGrade.grade
        })),
        experiments: []
      }
      user.store(payload)
    }).catch((err) => {
      errors = err.errors
    })
  }

$: areExperienceGradesValid = userInfos.experienceGrades?.every(({ grade }) => isDefined(grade))
</script>

  <Page>
    <fieldset class="d-flex flex-column align-items-center">
      <SexeQuestion bind:sexe={userInfos.sexe} />
    </fieldset>
    {#if userInfos.sexe}
      <NextButton />
    {/if}
  </Page>

  <Page>
    <fieldset class="d-flex flex-column align-items-center">
      <AgeQuestion bind:age={userInfos.age} />
    </fieldset>
    {#if userInfos.age}
      <NextButton />
    {/if}
  </Page>

  <Page>
    <fieldset class="d-flex flex-column align-items-center">
      <AnyExperience bind:grade={userInfos.anyExperience} />
    </fieldset>
    {#if isDefined(userInfos.anyExperience) }
      <NextButton class="justify-content-center" />
    {/if}
  </Page>

  <Page>
    <fieldset class="d-flex flex-column align-items-center">
      <ExperienceGrade bind:questions={userInfos.experienceGrades} />
    </fieldset>
    {#if areExperienceGradesValid}
      <NextButton class="justify-content-center" onClick={onSubmit} />
    {/if}
    {#if errors}
      <FormErrors {errors} />
    {/if}
  </Page>
