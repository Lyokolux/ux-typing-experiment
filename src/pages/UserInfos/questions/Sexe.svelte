<script lang="ts" context="module">
  export const SEXES = ['m', 'f', 'no-answer', 'else'] as const
  export type Sexe = typeof SEXES[number]
</script>
<script lang="ts">
  import { _ } from 'svelte-i18n'

  export let sexe: Sexe

  const SEXE_QUESTION: { value: Sexe, label: string }[] = [
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
</script>

<h3>{$_('user_infos.sexe.you_are')}:</h3>
{#each SEXE_QUESTION as { value, label }}
  <label>
    <input 
      type="radio" 
      class="form-check-input" 
      name="user_sexe" 
      value={value}
      required
      bind:group={sexe}
    >
    {label}
  </label>
{/each}