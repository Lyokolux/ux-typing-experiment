<script context="module" lang="ts">
  import { api, FirestoreStoredUser } from '../../stores/api'

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

  export let users: FirestoreStoredUser[]
</script>

<h1>{users.length}</h1>
<div class="p-4">
  <div class="row">
    <div class="col">
      <AgeRepartition ages={users.map(user => user.age)} />
    </div>
    <div class="col">
      <SexeRepartition sexes={users.map(user => user.sexe)} />
    </div>
  </div>
</div>
