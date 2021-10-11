<script lang="ts">
  import { _ } from 'svelte-i18n'

  import WavingHand from '../components/WavingHand.svelte'

  interface Dev {
    name: string
    link: string
  }

  const DEVS: Dev[] = [
    {
      name: '@johannchopin',
      link: 'https://github.com/johannchopin'
    },
    {
      name: '@Alexandre Guidoux',
      link: 'https://github.com/Lyokolux/ux-typing-experiment'
    },
    {
      name: '@Florian Weiss',
      link: 'https://fweiss.com/'
    },
    {
      name: '@ibrahimlahouar',
      link: 'https://github.com/ibrahimlahouar'
    }
  ]
</script>

<h2>{$_('last_screen.thanks')}</h2>

<p class="mt-5">
  {@html $_('last_screen.contact')}
</p>

<p class="mt-5">
  {@html $_('last_screen.produced_by')}
</p>

<ul class="list-group list-group-flush w-fit-content">
  {#each DEVS as { name, link }}
    <li class="list-group-item bg-transparent">
      <a href={link} target="_blank">{name}</a>
    </li>
  {/each}
</ul>

<WavingHand />
