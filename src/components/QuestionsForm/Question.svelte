<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { reverseArray } from '../../utils'
  import type { Question } from './QuestionsForm.svelte'

  export let question: Question

  const HIGHER_GRADE = 7
  const GRADES_RANGE = Array.from(Array(HIGHER_GRADE).keys()) // generate [0,1,2, ..., HIGHER_GRADE-1]

  $: labels = question.inverted ? [question.labelKeys[1], question.labelKeys[0]] : question.labelKeys
  $: grades = question.inverted ? reverseArray(GRADES_RANGE) : GRADES_RANGE
</script>


<li class="question fw-500 mb-2">
  <span class="text-end">{$_(labels[0])}</span>
  <div class="d-flex">
    {#each grades as grade}
      <input
        name={`${question.labelKeys[0]}-${question.labelKeys[1]}`}
        type="radio"
        class="form-check-input m-1"
        required
        bind:group={question.grade} value={grade}
      >
    {/each}
  </div>
  <span class="text-left">{$_(labels[1])}</span>
</li>

<style lang="scss">
  .question {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 12px;
    font-size: 1.25rem;
  }

  .question  span {
    min-width: 7em;
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    .question {
      font-size: 1.1rem;
    }

    .question span {
      font-size: 1rem;
    }
  }
</style>
