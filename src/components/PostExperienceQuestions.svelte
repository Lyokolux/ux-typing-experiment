<script lang="ts">
  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'

  export let questions: Question[]
</script>

<QuestionsForm
  bind:questions
/>
