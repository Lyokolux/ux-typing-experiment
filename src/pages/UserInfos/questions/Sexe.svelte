<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Sexe } from '../../../types'

  export let sexe: Sexe

  const SEXE_QUESTION: { value: Sexe, labelKey: string }[] = [
    {
      value: 'm',
      labelKey: 'user_infos.sexe.male'
    },
    {
      value: 'f',
      labelKey: 'user_infos.sexe.female'
    },
    {
      value: 'else',
      labelKey: 'user_infos.sexe.else'
    },
    {
      value: 'no-answer',
      labelKey: 'user_infos.sexe.no_answer'
    }
  ]
</script>

<h4>{$_('user_infos.sexe.you_are')}</h4>
<div>
{#each SEXE_QUESTION as { value, labelKey }}
  <label class="d-flex fw-500 align-items-center fs-5">
    <input
      type="radio"
      class="form-check-input"
      name="user_sexe"
      value={value}
      required
      bind:group={sexe}
    >
    <span class="px-2">{$_(labelKey)}</span>
  </label>
{/each}
</div>
