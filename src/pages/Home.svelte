<script lang="ts">
  import { _ } from 'svelte-i18n'
  import NextButton from '../components/NextButton.svelte'

  import QuestionsForm from '../components/QuestionsForm/QuestionsForm.svelte'
  import AlphanumericInput from '../components/AlphanumericInput/AlphanumericInput.svelte'
  const PARAGRAPH_AMOUNT = 6
  const I18N_KEYS = 'home.paragraph_'
  const PARAGRAPHS_KEYS = Array(PARAGRAPH_AMOUNT).fill(undefined).map((__, i) => `${I18N_KEYS}${i + 1}`)
</script>

<h1>{$_('title')}</h1>
{#each PARAGRAPHS_KEYS as paragraphKey}
  <p>{@html $_(paragraphKey)}</p>
{/each}
<NextButton>
  { $_('continue') }
</NextButton>
<AlphanumericInput
  value="T890SOLA6RF6628GB8"
  chunkLength={4}
  onSuccess={() => alert('success')}
/>
<AlphanumericInput
  value="T890SOLA6RF6628GB8"
  chunkLength={2}
  onSuccess={() => alert('success')}
/>

