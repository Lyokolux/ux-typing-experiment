<script lang="ts">
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'
  import { collection, getDocs } from 'firebase/firestore/lite'

  import { initFirestore } from '../firestore'
  import NextButton from '../components/NextButton.svelte'

  const PARAGRAPH_AMOUNT = 6
  const I18N_KEYS = 'home.paragraph_'
  const PARAGRAPHS_KEYS = Array(PARAGRAPH_AMOUNT).fill(undefined).map((__, i) => `${I18N_KEYS}${i + 1}`)

  onMount(() => {
    const { db } = initFirestore()

    getDocs(collection(db, 'users')).then(value => {
      console.log(value.docs.map(doc => doc.data()))
    })
  })
</script>

<h1>{$_('title')}</h1>
{#each PARAGRAPHS_KEYS as paragraphKey}
  <p>{@html $_(paragraphKey)}</p>
{/each}
<NextButton>
  { $_('continue') }
</NextButton>
