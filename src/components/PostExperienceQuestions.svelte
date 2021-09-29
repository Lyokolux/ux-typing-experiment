<script lang="ts">
  // disable it because eslint doesn't like the `bind:questions` binding
  /* eslint-disable no-use-before-define */
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'

  type CustomQuestion = Question & { labels: [string, string] }

  export let questions: CustomQuestion[];
</script>

<QuestionsForm
  bind:questions
/>
