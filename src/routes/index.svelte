<script lang="ts">
  import { onMount } from 'svelte'
  import { Swiper } from 'swiper'
  import 'swiper/css'

  import { swiper } from '../stores'
  import Page from '../components/Page.svelte'

  // P A G E S
  import Home from '../pages/Home.svelte'
  import UserInfos from '../pages/UserInfos/UserInfos.svelte'
  import FamiliarizationPage from '../pages/FamiliarizationPage.svelte'
  import ExperienceBeginning from '../pages/ExperienceBeginning.svelte'
  import Gratitude from '../pages/Gratitude.svelte'
  import PostExperience from '../pages/PostExperience.svelte'
  import LastScreen from '../pages/LastScreen.svelte'
  import { dev } from '$app/env';

  onMount(() => {
    swiper.set(new Swiper(
      '.swiper',
      {
        allowTouchMove: dev,
        direction: 'vertical'
      }
    ))
  })
</script>

<Page>
  <Home />
</Page >
<Page>
  <UserInfos />
</Page>
<Page>
  <FamiliarizationPage />
</Page>
<Page>
  <ExperienceBeginning />
</Page>

{#each [1, 2] as pageId}
  <Page>
    Slide {pageId}
  </Page>
  <Page>
    <PostExperience />
  </Page>
{/each}

<Page>
  <Gratitude />
</Page>
<Page>
  <LastScreen />
</Page>
