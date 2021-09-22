
<script lang="ts">
  import { _ } from 'svelte-i18n'

  const AGE_RANGES = ['-15', '15-17', '18-24', '25-34', '35-44', '45-54', '55-64', '+65'] as const
  interface UserInfos {
    sexe: 'm' | 'f' | 'no-answer' | 'else'
    age:  typeof AGE_RANGES[number];
  }
  const SEXE_QUESTION: { value: UserInfos['sexe'], label: string }[] = [
    {
      value: 'm',
      label: $_('user_infos.sexe.male')
    },
    {
      value: 'f',
      label: $_('user_infos.sexe.female')
    },
    {
      value: 'else',
      label: $_('user_infos.sexe.else')
    },
    {
      value: 'no-answer',
      label: $_('user_infos.sexe.no_answer')
    }
  ]


  let userInfos: Partial<UserInfos> = {}

  const onSubmit = (): void => {
    console.log(userInfos)
  }
</script>

<h2>User infos</h2>

<form on:submit|preventDefault={onSubmit}>
  <fieldset class="d-flex flex-column">
    <h3>{$_('user_infos.sexe.you_are')}:</h3>
    {#each SEXE_QUESTION as { value, label }}
      <label>
        <input 
          type="radio" 
          class="form-check-input" 
          name="user_sexe" 
          value={value}
          bind:group={userInfos.sexe} 
        >
        {label}
      </label>
    {/each}
  </fieldset>

  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>