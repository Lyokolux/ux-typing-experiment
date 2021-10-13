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
  import LastScreen from '../pages/LastScreen.svelte'
  import Experiences from '../pages/Experiences.svelte'
  import Results from '../pages/Results.svelte'
  import LoadingScreen from '../components/LoadingScreen.svelte'

  import { dev } from '$app/env'

  let isScreenReady = false

  onMount(() => {
    const swiperInstance = new Swiper(
      '.swiper',
      {
        allowTouchMove: dev,
        direction: 'vertical',
        speed: 800
      }
    )

    swiperInstance.on('slideChange', () => {
      $swiperReactive.activeIndex = swiperInstance.activeIndex
    })

    $swiperReactive.slidesAmount = swiperInstance.slides.length
    swiper.set(swiperInstance)

    setTimeout(() => {
      isScreenReady = true
    }, 2000)
  })
</script>

<Home />
<UserInfos />
<Page>
  <FamiliarizationPage />
</Page>
<Page>
  <ExperienceBeginning />
</Page>

<Experiences />

<Page class="pt-2">
  <Results />
</Page>
<Page class="pt-2">
  <LastScreen />
</Page>

<LoadingScreen visible={!isScreenReady} />
