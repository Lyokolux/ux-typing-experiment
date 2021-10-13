<script lang="ts">
import type { Age } from '../../../types'

import { _ } from 'svelte-i18n'

import Select from '../../../components/Select.svelte'

export let age: Age

const AGE_QUESTION: { value: Age, label: string }[] = [
  {
    value: undefined,
    label: $_('user_infos.age.pick_between')
  },
  {
    value: '-15',
    label: $_('user_infos.age.-15')
  },
  {
    value: '15-17',
    label: $_('user_infos.age.15-17')
  },
  {
    value: '18-24',
    label: $_('user_infos.age.18-24')
  },
  {
    value: '25-34',
    label: $_('user_infos.age.25-34')
  },
  {
    value: '35-44',
    label: $_('user_infos.age.35-44')
  },
  {
    value: '45-54',
    label: $_('user_infos.age.45-54')
  },
  {
    value: '55-64',
    label: $_('user_infos.age.55-64')
  },
  {
    value: '65+',
    label: $_('user_infos.age.65+')
  }
]
</script>

<label for="" class="h4">{$_('user_infos.age.what_is_your_age')}</label>
<div class="">
  <Select 
    bind:value={age}
    values={AGE_QUESTION}
    icon={undefined}
  />
</div>
