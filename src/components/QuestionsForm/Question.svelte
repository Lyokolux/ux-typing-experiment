<script lang="ts">
  import { reverseArray } from '../../utils'
  import type { Question } from './QuestionsForm.svelte'

  export let question: Question

  const HIGHER_GRADE = 6
  const GRADES_RANGE = Array.from(Array(HIGHER_GRADE).keys()) // generate [0,1,2, ..., HIGHER_GRADE-1]

  $: labels = question.inverted ? [question.labels[1], question.labels[0]] : question.labels
  $: grades = question.inverted ? reverseArray(GRADES_RANGE) : GRADES_RANGE
</script>


<li class="fs-5 question">
  <span class="text-end">{labels[0]}</span>
  <div>
    {#each grades as grade}
      <input
        name={`${question.labels[0]}-${question.labels[1]}`}
        type="radio"
        class="form-check-input m-1"
        required
        bind:group={question.grade} value={grade}
      >
    {/each}
  </div>
  <span class="text-left">{labels[1]}</span>
</li>

<style>
  .question {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;
    font-weight: 500;
  }
</style>