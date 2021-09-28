<script lang="ts">
  import { CHUNK_SIZES } from '../const'

  import { getGeneratedRandomString } from '../utils';

  import Page from '../components/Page.svelte';
  import Experience from '../components/Experience.svelte'
</script>

{#each CHUNK_SIZES as chunkSize}
  <Page>
    <Experience
      value={getGeneratedRandomString()}
      displayChunkSize={chunkSize}
      inputChunkSize={chunkSize}
    />
  </Page>
{/each}