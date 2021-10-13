<script lang="ts">
  import { getExperiencesConfigs, isNumberInt } from '../utils'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'
  import type { Experiment } from '../types'
  import type { Event } from '../components/AlphanumericInput/utils'

  import { swiper, swiperReactive, user } from '../stores'
  import Page from '../components/Page.svelte'
  import Experience from '../components/Experience.svelte'
  import PostExperience from './PostExperience.svelte'
  import { FIRST_EXPERIENCES_PAGE_INDEX } from '../const'

  const experiences = getExperiencesConfigs()

  let questions: Question[][] = []
  let events: Event[][] = []
  
  const onFormSubmit = (index: number): void => {
    const experience = experiences[index]
    const experimentResult: Experiment = {
      id: `${experience.displayChunkLength}-${experience.inputChunkLength}`,
      questions: questions[index].map(v => ({ ids: v.ids, grade: v.grade })),
      events: events[index]
    }
    user.addExperience(experimentResult)
  }

  const focusCurrentAlphanumericInput = (pageIndex: number): void => {
    const experiencePageIndex = (pageIndex - FIRST_EXPERIENCES_PAGE_INDEX) / 2

    if (isNumberInt(experiencePageIndex)) {
      const pageRef = document.getElementById(`experienceInput${experiencePageIndex}`)

      if (pageRef) {
        // 🐛 without the setTimeout, swiper jump to next slide on focus
        setTimeout(() => {
          pageRef.querySelector<HTMLInputElement>('input.chunk')?.focus()
        }, 500)
      }
    }
  }

  $: focusCurrentAlphanumericInput($swiperReactive.activeIndex)
</script>

{#each experiences as { value, displayChunkLength, inputChunkLength}, i}
  <Page id={`experienceInput${i}`} class="d-flex justify-content-center">
      <Experience
        currentIndex={i}
        {value}
        {displayChunkLength}
        {inputChunkLength}
        bind:events={events[i]}
        onSuccess={() => { $swiper.slideNext() }}
      />
  </Page>
  <Page>
    <PostExperience 
      onSubmit={() => onFormSubmit(i)}
      bind:questions={questions[i]} 
    />
  </Page>
{/each}
