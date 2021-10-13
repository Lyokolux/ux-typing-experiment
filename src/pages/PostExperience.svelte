<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'
  import { isDefined } from '../utils'
  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'
  import NextButton from '../components/NextButton.svelte'

  export let onSubmit: () => void
  export let questions: Question[]

  const QUESTIONS: Omit<Question, 'labels'>[] = [
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
      ids: ['not-nice', 'nice'],
      grade: null,
      inverted: true
    },
    {
      ids: ['tedious', 'effective'],
      grade: null
    }
  ]

  $: questions = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })

  $: areQuestionsFilled = questions.every(({ grade }) => isDefined(grade))
</script>

<form on:submit|preventDefault={onSubmit}>
  <h4 class="text-center mb-4">{$_('post_experience.title')}</h4>

  <PostExperienceQuestions bind:questions />

  {#if areQuestionsFilled}
    <NextButton class="justify-content-center">{$_('continue')}</NextButton>
  {/if}
</form>
