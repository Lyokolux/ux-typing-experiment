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
  import DevicesRepartition from '../../components/graphs/DevicesRepartition.svelte';

  import { getExperimentsAverage } from '../../components/graphs/utils';

  import type { User } from '../../types';
  
  export let users: User[]

  const experimentsAverage = getExperimentsAverage(users.map(user => user.experiments).flat())
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
      <ErrorPerChunksCount experiments={users.map(user => user.experiments).flat()} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <DeleteUpdatePerChunksCount experiments={experimentsAverage} />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      TODO: add duration per experiment
    </div>
  </div>
</div>
