<script context="module" lang="ts">
  import { api } from '../../stores/api'

  export async function load() {
    const users = await api.getAllUsers()

    return {
      props: {
        users
      }
    }
  }
</script>

<script lang="ts">
  import SexeRepartition from '../../components/graphs/SexeRepartition.svelte'
  import AgeRepartition from '../../components/graphs/AgeRepartition.svelte'
  import ErrorPerChunksCount from '../../components/graphs/ErrorPerChunksCount.svelte'
  import DeleteUpdatePerChunksCount from '../../components/graphs/DeleteUpdatePerChunksCount.svelte'

  import { getExperimentsAverage } from '../../components/graphs/utils';

  import type { User } from '../../types';
  
  export let users: User[]

  const experimentsAverage = getExperimentsAverage(users.map(user => user.experiments).flat())
</script>

<div class="p-4">
  <h1>Results after {users.length} participations</h1>

  <div class="row">
    <div class="col">
      <AgeRepartition ages={users.map(user => user.age)} />
    </div>
    <div class="col">
      <SexeRepartition sexes={users.map(user => user.sexe)} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <ErrorPerChunksCount experiments={users.map(user => user.experiments).flat()} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <DeleteUpdatePerChunksCount experiments={experimentsAverage} />
    </div>
  </div>
</div>
