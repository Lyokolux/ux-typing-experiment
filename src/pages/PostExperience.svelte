<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'
  import { isDefined } from '../utils'
  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'
  import NextButton from '../components/NextButton.svelte'

  export let onSubmit: () => void
  export let questions: Question[]

  const QUESTIONS: Omit<Question, 'labelKeys'>[] = [
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

  questions = QUESTIONS.map(question => {
    return {
      ...question,
      labelKeys: [`questions.${question.ids[0]}`, `questions.${question.ids[1]}`]
    }
  })

  $: areQuestionsFilled = questions.every(({ grade }) => isDefined(grade))
</script>

<h2 class="text-center mb-4 fs-4">{$_('post_experience.title')}</h2>
<form on:submit|preventDefault={onSubmit}>

  <PostExperienceQuestions bind:questions />

  {#if areQuestionsFilled}
    <NextButton class="justify-content-center">{$_('continue')}</NextButton>
  {/if}
</form>
