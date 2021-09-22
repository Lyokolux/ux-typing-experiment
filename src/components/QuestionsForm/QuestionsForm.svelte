<script lang="ts" context="module">
  export interface Question {
    labels: string[] // like ['Plaisante', 'Déplaisante']
    // the labels are inverted
    inverted?: boolean
    grade: number | null
  }
</script>
<script lang="ts">
  import QuestionComponent from "./Question.svelte"

  export let questions: Question[]
</script>

<table>
  {#each questions as question}
    <QuestionComponent bind:question />
  {/each}
</table>