<script lang="ts" context="module">
  /* eslint-disable no-multiple-empty-lines */
  import type { Qualification } from '../../types'

  export interface Question {
    ids: [Qualification, Qualification]
    labelKeys: [string, string]
    // the labels are inverted
    inverted?: boolean
    grade: number | null
  }
</script>
<script lang="ts">
  import QuestionComponent from './Question.svelte'

  export let questions: Question[]
</script>

<ul class="d-flex flex-column overflow-auto">
  {#each questions as question}
    <QuestionComponent bind:question />
  {/each}
</ul>

<style>
  ul {
    max-width: 100%;
  }
</style>