<script lang="ts">
  import { _ } from 'svelte-i18n'
  import QuestionsForm from '../../../components/QuestionsForm/QuestionsForm.svelte'
  import type { Question } from '../../../components/QuestionsForm/QuestionsForm.svelte'

  const QUESTIONS: Omit<Question, 'labels'>[] = [
    {
      ids: ['unpleasant', 'pleasant'],
      grade: undefined,
      inverted: true
    },
    {
      ids: ['complicated', 'simple'],
      grade: undefined,
      inverted: false
    },
    {
      ids: ['not-practical', 'practical'],
      grade: undefined,
      inverted: true
    },
    {
      ids: ['tedious', 'effective'],
      grade: undefined,
      inverted: false
    },
    {
      ids: ['bad', 'good'],
      grade: undefined,
      inverted: true
    },
    {
      ids: ['discouraging', 'motivating'],
      grade: undefined,
      inverted: false
    }
  ]

  let questionForForm: Question[] = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })

  export let questions: Omit<Question, 'labels'>[]
  $: {
    questions = questionForForm.map(q => {
      // eslint-disable-next-line
      const { labels, ...rest } = q
      return rest
    })
  }
</script>

<h4>{$_('user_infos.experience_grade.question')}</h4>

<QuestionsForm 
  bind:questions={questionForForm}
/>
