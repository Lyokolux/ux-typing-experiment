<script lang="ts" context="module">
import type { Qualification } from '../../types'

/* eslint-disable no-multiple-empty-lines */
export interface Question {
    ids: [Qualification, Qualification]
    labels: [string, string]
    // the labels are inverted
    inverted?: boolean
    grade: number | undefined
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