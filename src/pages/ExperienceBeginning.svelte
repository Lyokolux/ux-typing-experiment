<script>
  import { _ } from 'svelte-i18n'
  import NextButton from '../components/NextButton.svelte'
</script>

<section>
    <h2>{$_('experience_beginning.experiment_will_begin')}</h2>

    <p>{$_('experience_beginning.start_if_you_are_ready')}</p>

    <NextButton>
        {$_('familirization_page.begin')}
    </NextButton>
</section>
