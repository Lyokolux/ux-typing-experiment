<script lang="ts">
  import { _ } from 'svelte-i18n'
  import NextButton from '../components/NextButton.svelte';

  const PARAGRAPH_AMOUNT = 6
  const I18N_KEYS = 'home.paragraph-'
  const PARAGRAPHS_KEYS = Array(PARAGRAPH_AMOUNT).fill(undefined).map((_, i) => `${I18N_KEYS}${i+1}`);
</script>

<h1>{$_('title')}</h1>
{#each PARAGRAPHS_KEYS as paragraphKey}
<p>{@html $_(paragraphKey)}</p>
{/each}
<NextButton>
  { $_('continue') }
</NextButton>
