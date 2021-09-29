<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
  import type { Question } from '../../../components/QuestionsForm/QuestionsForm.svelte'
  
  export type CustomQuestion = Question & { labels: [string, string] };
</script>
<script lang="ts">
  import { _ } from 'svelte-i18n'

  import QuestionsForm from '../../../components/QuestionsForm/QuestionsForm.svelte'

  const QUESTIONS: Question[] = [
    {
      ids: ['unpleasant', 'pleasant'],
      grade: null,
      inverted: true
    },
    {
      ids: ['complicated', 'simple'],
      grade: null,
      inverted: false
    },
    {
      ids: ['not-practical', 'practical'],
      grade: null,
      inverted: true
    },
    {
      ids: ['tedious', 'effective'],
      grade: null,
      inverted: false
    },
    {
      ids: ['bad', 'good'],
      grade: null,
      inverted: true
    },
    {
      ids: ['discouraging', 'motivating'],
      grade: null,
      inverted: false
    }
  ]

  let questionForForm: CustomQuestion[] = QUESTIONS.map(question => {
    return {
      ...question,
      labels: [$_(`questions.${question.ids[0]}`), $_(`questions.${question.ids[1]}`)]
    }
  })

  export let questions: Question[]
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
