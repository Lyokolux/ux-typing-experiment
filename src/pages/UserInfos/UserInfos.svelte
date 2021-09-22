<script lang="ts">
  import * as yup from 'yup'
  import { _ } from 'svelte-i18n'

  import SexeQuestion, { SEXES } from './questions/Sexe.svelte'
  import type { Sexe } from './questions/Sexe.svelte'
  import FormErrors from './FormErrors.svelte'

  const AGE_RANGES = ['-15', '15-17', '18-24', '25-34', '35-44', '45-54', '55-64', '+65'] as const

  interface UserInfos {
    sexe: Sexe
    age:  typeof AGE_RANGES[number]
  }

  let userInfos: Partial<UserInfos> = {}
  let errors: string[] = []

  const schema = yup.object().shape({
    sexe: yup.mixed().oneOf([...SEXES]).required($_('user_infos.sexe.is_required'))
  })

  const onSubmit = (): void => {
    schema.validate(userInfos).then(() => {
      console.log(userInfos)
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

  <FormErrors {errors} />

  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>