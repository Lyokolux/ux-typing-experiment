<script lang="ts">
  import { _ } from 'svelte-i18n'
  import QuestionsForm from '../../../components/QuestionsForm/QuestionsForm.svelte'
  import type { Question } from '../../../components/QuestionsForm/QuestionsForm.svelte'

  const QUESTIONS: Omit<Question, 'labelKeys'>[] = [
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

  let questionForForm: Question[]
  questionForForm = QUESTIONS.map(question => {
    return {
      ...question,
      labelKeys: [`questions.${question.ids[0]}`, `questions.${question.ids[1]}`]
    }
  })

  export let questions: Omit<Question, 'labelKeys'>[]
  $: {
    questions = questionForForm.map(q => {
      // eslint-disable-next-line
      const { labelKeys, ...rest } = q
      return rest
    })
  }
</script>

<h4>{$_('user_infos.experience_grade.question')}</h4>

<QuestionsForm 
  bind:questions={questionForForm}
/>
