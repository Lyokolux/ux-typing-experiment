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
  export let users: FirestoreStoredUser[]
</script>

<h1>{users.length}</h1>
