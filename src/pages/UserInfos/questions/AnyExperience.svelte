<script lang="ts">
  import { _ } from 'svelte-i18n'

  import QuestionsForm from '../../../components/QuestionsForm/QuestionsForm.svelte'
  import type { Question } from '../../../components/QuestionsForm/QuestionsForm.svelte'

  export let grade: number | null = null

  let questions: Question[]
  questions = [
    {
      ids: ['any_experience', 'lot_of_experience'],
      labelKeys: ['user_infos.any_experience.never', 'user_infos.any_experience.often'],
      grade: null
    }
  ]

  $: grade = questions[0].grade
</script>

<h4>{$_('user_infos.any_experience.any_experience')}</h4>

<QuestionsForm 
  bind:questions
/>
