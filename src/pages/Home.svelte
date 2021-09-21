<script lang="ts">
  import Page from '../components/Page.svelte';
  import { swiper } from '../stores'
</script>

<Page>
  <h2>Home</h2>
  <button class="btn btn-primary" on:click={() => $swiper.slideNext() }>next</button>
</Page>
