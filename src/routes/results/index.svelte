<script context="module" lang="ts">
  /* eslint-disable no-multiple-empty-lines */
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
  import DevicesRepartition from '../../components/graphs/DevicesRepartition.svelte'

  import { getExperimentsAverage } from '../../components/graphs/utils'

  import type { User } from '../../types'
  import DurationPerChunks from '../../components/graphs/DurationPerChunks.svelte'
  
  export let users: User[]

  const experiments = users.map(user => user.experiments).flat()
  const experimentsAverage = getExperimentsAverage(experiments)
</script>

<div class="container">
  <h1>Results after <b>{users.length}</b> participations:</h1>

  <div class="row mt-5">
    <div class="col">
      <AgeRepartition ages={users.map(user => user.age)} />
    </div>
    <div class="col">
      <SexeRepartition sexes={users.map(user => user.sexe)} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <DevicesRepartition devices={users.map(user => user.device)} />
    </div>
  </div>  <div class="row mt-3">
    <div class="col">
      <ErrorPerChunksCount experiments={experiments} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <DeleteUpdatePerChunksCount experiments={experimentsAverage} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <DurationPerChunks experiments={experiments} />
    </div>
  </div>
</div>
