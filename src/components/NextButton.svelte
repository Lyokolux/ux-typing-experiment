<div class={`d-flex mt-5 ${className}`}>
    <button class="btn btn-primary my-auto" on:click={() => $swiper.slideNext() }>
        <slot></slot>
    </button>
</div>

<script>
    import { swiper } from '../stores'

    let className = ""
    export { className as class }
</script>