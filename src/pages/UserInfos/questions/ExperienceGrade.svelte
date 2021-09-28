<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Qualification } from '../../../const'
  import type { Question } from '../../../components/QuestionsForm/QuestionsForm.svelte'

  import QuestionsForm from '../../../components/QuestionsForm/QuestionsForm.svelte'

  type CustomQuestion = Omit<Question, 'labels'> & {ids: [Qualification, Qualification]}

  const QUESTIONS: CustomQuestion[] = [
    {
      ids: ['unpleasant', 'pleasant'],
      grade: null,
      inverted: true
    },
    {
      ids: ['complicated', 'simple'],
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
    },
    {
      ids: ['bad', 'good'],
      grade: null,
      inverted: true
    },
    {
      ids: ['discouraging', 'motivating'],
      grade: null,
      inverted: true
    }
  ]

  export let questions: Question[] = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })
</script>
<h4>{$_('user_infos.experience_grade.question')}</h4>

<QuestionsForm 
  bind:questions
/>
