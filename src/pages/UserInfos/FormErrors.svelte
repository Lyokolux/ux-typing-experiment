<script lang="ts">
  /* eslint-disable no-use-before-define, no-multiple-empty-lines */
  import { _ } from 'svelte-i18n'

  export let errors: string[] = []
</script>

{#if errors.length > 0}
  <div class="d-flex flex-column alert alert-danger m-4">
    <h4>{$_('user_infos.errors_in_form')}:</h4>
    <ol class="list-group list-group-numbered mt-3">
      {#each errors as error}
        <li class="list-group-item list-group-item-danger fw-bold">{error}</li>
      {/each}
    </ol>
  </div>
{/if}
