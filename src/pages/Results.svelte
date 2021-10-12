<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { user, swiperReactive } from '../stores'
  import DeleteUpdatePerChunksCount from '../components/graphs/DeleteUpdatePerChunksCount.svelte'
  import ErrorPerChunksCount from '../components/graphs/ErrorPerChunksCount.svelte'
  import DurationPerChunks from '../components/graphs/DurationPerChunks.svelte'
  import NextButton from '../components/NextButton.svelte'
</script>


<h2 class="my-5">{$_('results.title')}</h2>

<div class="overflow-auto p-2">
  <!-- This page is the second to last so -1 and activeIndex start at 0 so again -1 -->
  {#if $user.experiments && $swiperReactive.activeIndex === $swiperReactive.slidesAmount - 2}
    <ErrorPerChunksCount experiments={$user.experiments} />
    <br />
    <DeleteUpdatePerChunksCount experiments={$user.experiments} />
    <br />
    <DurationPerChunks experiments={$user.experiments} />
  {/if}
</div>

<NextButton />

<style>
  div {
    max-height: 55vh;
  }
</style>
