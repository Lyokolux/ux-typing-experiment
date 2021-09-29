<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'
  import type { CustomQuestion } from './UserInfos/questions/ExperienceGrade.svelte';
  
  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'

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

  let questions: CustomQuestion[] = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })

  let onSubmit = (): void => {
    // TODO: send to firestore
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <PostExperienceQuestions bind:questions />

  <!-- TODO: Better text for continue button -->
  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>