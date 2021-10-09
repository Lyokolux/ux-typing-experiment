<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
  import '../i18n'
  import { waitLocale } from 'svelte-i18n'

  export async function load(): Promise<Record<string, never>> {
    await waitLocale()
    return {}
  }
</script>
<script lang="ts">
  import '../global.scss'
  import { onMount } from 'svelte'

  import { screen } from '../stores'
  import { getUserDevice } from '../utils'

  import LocaleSelect from '../components/LocaleSelect.svelte'
  import Blob from '../components/Blob/Blob.svelte'

  const onPageAppLeave = (e): void => {
    // here browser show default message --> not possible to use a custom one
    (e || window.event).returnValue = ''
  }

  let windowHeight: number
  let windowWidth: number
  let hasOnTouchStartProperty: boolean = false
  onMount(() => {
    hasOnTouchStartProperty = ('ontouchstart' in window)
  })

  $: {
    screen.set({
      height: windowHeight,
      width: windowWidth,
      device: getUserDevice(hasOnTouchStartProperty, $screen.width, $screen.height)
    })
  }
</script>

<svelte:window 
  on:beforeunload={onPageAppLeave}
  bind:innerHeight={windowHeight}
  bind:innerWidth={windowWidth}
/>

<div
  class="swiper w-100 h-100 text-primary position-relative"
  bind:offsetHeight={$screen.height}
  bind:offsetWidth={$screen.width}
>
  <LocaleSelect />
  <Blob type="stacked-waves" class="position-absolute w-100" />

  <div class="swiper-wrapper">
    <slot />
  </div>
</div>

<style lang="scss">
  @media screen and (max-width: 992px) {
    .swiper :global(.stacked-waves) {
      width: 250%!important;
    }
  }
</style>