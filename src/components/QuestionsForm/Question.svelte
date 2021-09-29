<script lang="ts">
  import { reverseArray } from '../../utils'
  import type { CustomQuestion } from '../../pages/UserInfos/questions/ExperienceGrade.svelte'

  export let question: CustomQuestion

  const HIGHER_GRADE = 6
  const GRADES_RANGE = Array.from(Array(HIGHER_GRADE).keys()) // generate [0,1,2, ..., HIGHER_GRADE-1]

  $: labels = question.inverted ? [question.labels[1], question.labels[0]] : question.labels
  $: grades = question.inverted ? reverseArray(GRADES_RANGE) : GRADES_RANGE
</script>


<tr>
  <td>{labels[0]}</td>
  <td class="px-2">
    {#each grades as grade}
      <input
        name={`${question.labels[0]}-${question.labels[1]}`}
        type="radio"
        class="form-check-input m-1"
        required
        bind:group={question.grade} value={grade}
      >
    {/each}
  </td>
  <td>{labels[1]}</td>
</tr>