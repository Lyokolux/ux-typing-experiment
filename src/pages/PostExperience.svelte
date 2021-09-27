<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'
  
  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'

  let questions: Question[]

  let onSubmit = (): void => {
    // TODO: send to firestore
    console.log(questions)
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <PostExperienceQuestions bind:questions />

  <!-- TODO: Better text for continue button -->
  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>