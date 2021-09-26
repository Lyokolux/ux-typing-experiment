<script>
  import PostExperienceQuestions from '../components/PostExperienceQuestions.svelte'
</script>
<form on:submit|preventDefault={onSubmit}>

  <PostExperienceQuestions />
  <button class="btn btn-primary mt-3">{$_('continue')}</button>
</form>