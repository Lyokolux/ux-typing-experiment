<script lang="ts">
  // disable it because eslint doesn't like the `bind:questions` binding
  /* eslint-disable no-use-before-define */
  import { _ } from 'svelte-i18n'

  import type { Qualification } from '../const'
  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'

  type CustomQuestion = Question & { labels: [string, string] }

  const QUESTIONS: Question[] = [
    {
      ids: ['unpleasant', 'pleasant'],
      grade: null,
      inverted: true
    },
    {
      ids: ['not-practical', 'practical'],
      grade: null,
      inverted: true
    },
    {
      ids: ['tedious', 'effective'],
      grade: null
    }
  ]

  export let questions: CustomQuestion[] = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })
</script>

<QuestionsForm
  bind:questions
/>
