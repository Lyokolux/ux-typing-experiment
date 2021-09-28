<script lang="ts">
  import { getExperiencesConfigs } from '../utils'

  import Page from '../components/Page.svelte'
  import Experience from '../components/Experience.svelte'
  import PostExperience from './PostExperience.svelte'

  const experiences = getExperiencesConfigs()
</script>

{#each experiences as { value, displayChunkLength, inputChunkLength}, i}
  <Page>
    <Experience
      currentIndex={i}
      {value}
      {displayChunkLength}
      {inputChunkLength}
    />
  </Page>
  <Page>
    <PostExperience />
  </Page>
{/each}
