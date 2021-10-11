<script lang="ts">
  import { _ } from 'svelte-i18n'
  import Page from '../components/Page.svelte'

  import NextButton from '../components/NextButton.svelte'

  const PARAGRAPH_AMOUNT = 4
  const I18N_PARAGRAPH_KEY = 'home.paragraph_'
</script>

{#each Array(PARAGRAPH_AMOUNT) as __, i}
<Page>
  {#if i === 0}
  <h1>
    {$_('title')}
  </h1>
  {/if}

  <p>{@html $_(`${I18N_PARAGRAPH_KEY}${i + 1}`)}</p>
  <NextButton>
    { $_('continue') }
  </NextButton>
</Page>
{/each}