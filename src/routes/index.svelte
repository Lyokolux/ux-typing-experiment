<script lang="ts">
  import { onMount } from 'svelte'
  import { Swiper } from 'swiper'
  import 'swiper/css'

  import { swiper, swiperReactive } from '../stores'
  import Page from '../components/Page.svelte'

  // P A G E S
  import Home from '../pages/Home.svelte'
  import UserInfos from '../pages/UserInfos/UserInfos.svelte'
  import FamiliarizationPage from '../pages/FamiliarizationPage.svelte'
  import ExperienceBeginning from '../pages/ExperienceBeginning.svelte'
  import Gratitude from '../pages/Gratitude.svelte'
  import LastScreen from '../pages/LastScreen.svelte'
  import Experiences from '../pages/Experiences.svelte'

  import { dev } from '$app/env'

  onMount(() => {
    const swiperInstance = new Swiper(
      '.swiper',
      {
        allowTouchMove: dev,
        direction: 'vertical'
      }
    )
    swiperInstance.on('slideChange', () => {
      $swiperReactive.activeIndex = swiperInstance.activeIndex
    })

    swiper.set(swiperInstance)
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

<Experiences />

<Page>
  <Gratitude />
</Page>
<Page>
  <LastScreen />
</Page>
