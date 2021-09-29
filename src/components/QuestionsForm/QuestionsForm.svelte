<script lang="ts" context="module">
import type { Qualification } from '../../const'

/* eslint-disable no-multiple-empty-lines */
export interface Question {
    ids: [Qualification, Qualification]
    // the labels are inverted
    inverted?: boolean
    grade: number | null
  }
</script>
<script lang="ts">
  import type { CustomQuestion } from '../../pages/UserInfos/questions/ExperienceGrade.svelte'
  import QuestionComponent from './Question.svelte'

  export let questions: CustomQuestion[]
</script>

<table>
  {#each questions as question}
    <QuestionComponent bind:question />
  {/each}
</table>