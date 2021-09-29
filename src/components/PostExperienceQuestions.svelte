<script lang="ts">
  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'

  type CustomQuestion = Question & { labels: [string, string] }

  export let questions: CustomQuestion[]
</script>

<QuestionsForm
  bind:questions
/>
