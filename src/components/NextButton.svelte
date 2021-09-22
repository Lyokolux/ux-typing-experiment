<div class="row justify-center mt-8">
    <button class="btn btn-primary my-auto" on:click={() => $swiper.slideNext() }>
        <slot></slot>
    </button>
</div>

<script>
    import { _ } from 'svelte-i18n'
    import { swiper } from '../stores'
</script>