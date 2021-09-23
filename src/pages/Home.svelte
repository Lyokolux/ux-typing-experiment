<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { swiper } from '../stores'

  const PARAGRAPH_AMOUNT = 6
  const I18N_KEYS = 'home.paragraph-'
  const PARAGRAPHS_KEYS = Array(PARAGRAPH_AMOUNT).fill(undefined).map((_, i) => `${I18N_KEYS}${i+1}`);
</script>

<h1>{$_('title')}</h1>
{#each PARAGRAPHS_KEYS as paragraphKey}
<p>{@html $_(paragraphKey)}</p>
{/each}
<button class="btn btn-primary" on:click={() => $swiper.slideNext() }>next</button>
