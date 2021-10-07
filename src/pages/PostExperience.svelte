<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'
  import NextButton from '../components/NextButton.svelte'

  export let onSubmit: () => void
  export let questions: Question[]

  const QUESTIONS: Omit<Question, 'labels'>[] = [
    {
      ids: ['unpleasant', 'pleasant'],
      grade: undefined,
      inverted: true
    },
    {
      ids: ['not-practical', 'practical'],
      grade: undefined,
      inverted: true
    },
    {
      ids: ['tedious', 'effective'],
      grade: undefined
    }
  ]

  questions = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })

  $: arePostExperienceQuestionsFilled = questions.every(({ grade }) => grade !== undefined)
</script>

<form on:submit|preventDefault={onSubmit}>
  <PostExperienceQuestions bind:questions />

  {#if arePostExperienceQuestionsFilled}
    <NextButton class="justify-content-center">{$_('continue')}</NextButton>
  {/if}
</form>
