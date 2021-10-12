<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { fly } from 'svelte/transition'
    import { swiper } from '../stores'

    let className = ''
    export { className as class }
    export let onClick: () => void = () => {}

    const goNext = (): void => {
      setTimeout(() => {
        $swiper.slideNext()
        onClick()
      }, 0)
    }
</script>

<div class={`next-btn d-flex justify-content-center my-5 ${className}`} transition:fly="{{ y: 30, duration: 200 }}">
  <button class="btn btn-primary my-auto" on:click={goNext}>
    <slot>{$_('continue')}</slot>
  </button>
</div>
