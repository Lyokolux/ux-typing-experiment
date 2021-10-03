<div class="d-flex">
    <button class={`btn btn-primary my-auto ${className}`} on:click={() => $swiper.slideNext() }>
        <slot></slot>
    </button>
</div>

<script>
    import { swiper } from '../stores'

    let className = ""
    export { className as class }
</script>