<script lang="ts">
    import { _ } from 'svelte-i18n'
    import AlphanumericInput from '../components/AlphanumericInput/AlphanumericInput.svelte'
    import { swiper } from '../stores'

    const CHUNK_LENGTH = 9
    const SEQUENCE = 'T890SOLA6 RF6628GB8'
    let events = []
</script>

<p>{$_('familirization_page.here_an_example')}</p>

<p>{$_('familirization_page.instructions')}</p>

<p class="font-digit-readable mt-5">{SEQUENCE}</p>

<AlphanumericInput
  value={SEQUENCE.replace(' ', '')}
  bind:events
  chunkLength={CHUNK_LENGTH}
  onFilled={() => { $swiper.slideNext() }}
  onCancel={() => {
    setTimeout(() => {
      $swiper.slideNext()
    }, 1500)
  }}
/>