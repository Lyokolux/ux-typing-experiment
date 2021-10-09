<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { user, swiperReactive } from '../stores'
  import DeleteUpdatePerChunksCount from '../components/graphs/DeleteUpdatePerChunksCount.svelte'
import NextButton from '../components/NextButton.svelte'
</script>


<h2 class="my-5">{$_('results.title')}</h2>

<!-- This page is the second to last so -1 and activeIndex start at 0 so again -1 -->
{#if $user.experiments && $swiperReactive.activeIndex === $swiperReactive.slidesAmount - 2}
  <DeleteUpdatePerChunksCount experiments={$user.experiments}/>
{/if}

<NextButton />