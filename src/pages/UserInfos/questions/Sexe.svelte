<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Sexe } from '../../../types';

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

<h4>{$_('user_infos.sexe.you_are')}:</h4>
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