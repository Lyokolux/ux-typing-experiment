<div class={`d-flex my-5 ${className}`}>
    <button class="btn btn-primary my-auto" on:click={() => $swiper.slideNext() }>
        <slot>{$_('continue')}</slot>
    </button>
</div>

<script>
    import { _ } from 'svelte-i18n'
    import { swiper } from '../stores'

    let className = ''
    export { className as class }
</script>