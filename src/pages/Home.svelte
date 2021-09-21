<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { swiper } from '../stores'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'
</script>

<h1>{$_('title')}</h1>
<h2>Home</h2>
<button class="btn btn-primary" on:click={() => $swiper.slideNext() }>next</button>

<QuestionsForm 
  questions={[
    {
      labels: ['Déplaisante', 'Plaisante'],
      inverted: true,
      grade: null
    },
    {
      labels: ['Déplaisante', 'Plaisante'],
      grade: null
    },
    {
      labels: ['pas cool', 'cool'],
      grade: 4
    }
  ]}
/>