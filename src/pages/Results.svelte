<script>
  import { user, swiperReactive } from '../stores'
  import DeleteUpdateColumn from '../components/graphs/DeleteUpdateColumn.svelte'
</script>


<!-- This page is the second second to last so -2 and activeIndex start at 0 so again -1 -->
{#if $user.experiments && $swiperReactive.activeIndex === $swiperReactive.slidesAmount - 3}
  <DeleteUpdateColumn experiments={$user.experiments}/>
{/if}