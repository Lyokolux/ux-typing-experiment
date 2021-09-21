<script lang="ts">
  import { swiper } from '../stores'
</script>

<h2>Home</h2>
<button class="btn btn-primary" on:click={() => $swiper.slideNext() }>next</button>
