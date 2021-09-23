<div class="row justify-center">
    <button class="btn btn-primary my-auto" on:click={() => $swiper.slideNext() }>
        <slot></slot>
    </button>
</div>

<script>
    import { swiper } from '../stores'
</script>