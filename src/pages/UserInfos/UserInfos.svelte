<script lang="ts">
  import * as yup from 'yup'
  import { _ } from 'svelte-i18n'
  import { api } from '../../store/api'

  import type { Sexe } from './questions/Sexe.svelte'
  import type { Age } from './questions/Age.svelte'
  import type { Question } from '../../components/QuestionsForm/QuestionsForm.svelte'

  import SexeQuestion, { SEXES } from './questions/Sexe.svelte'
  import AgeQuestion, { AGES } from './questions/Age.svelte'
  import FormErrors from './FormErrors.svelte'
  import AnyExperience from './questions/AnyExperience.svelte'
  import ExperienceGrade from './questions/ExperienceGrade.svelte'

  interface UserInfos {
    sexe: Sexe
    age: Age
    anyExperience: number
    experienceGrades: Question[]
  }

  let userInfos: Partial<UserInfos> = {}
  let errors: string[] = []

  const schema = yup.object().shape({
    sexe: yup.mixed().oneOf([...SEXES]).required($_('user_infos.sexe.is_required')),
    age: yup.mixed().oneOf([...AGES]).required($_('user_infos.age.is_required')),
    anyExperience: yup.number().min(0).max(5).required()
  })

  const onSubmit = (): void => {
    schema.validate(userInfos).then(() => {
      // TODO: userInfos should not be Partial here anymore
      api.addUserRequest(userInfos)
    }).catch((err) => {
      errors = err.errors
    })
  }
</script>

<h2>User infos</h2>

<form on:submit|preventDefault={onSubmit}>
  <fieldset class="d-flex flex-column">
    <SexeQuestion bind:sexe={userInfos.sexe} />
  </fieldset>

  <fieldset class="d-flex flex-column mt-3">
    <AgeQuestion bind:age={userInfos.age} />
  </fieldset>

  <fieldset class="d-flex flex-column mt-3">
    <AnyExperience bind:grade={userInfos.anyExperience} />
  </fieldset>

  <fieldset class="d-flex flex-column mt-3">
    <ExperienceGrade bind:questions={userInfos.experienceGrades} />
  </fieldset>

  <FormErrors {errors} />

  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>