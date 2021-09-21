<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { swiper } from '../stores'
</script>

<h1>{$_('title')}</h1>
<h2>Home</h2>
<button class="btn btn-primary" on:click={() => $swiper.slideNext() }>next</button>
