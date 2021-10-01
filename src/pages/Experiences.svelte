<script lang="ts">
  import { getExperiencesConfigs } from '../utils'

  import type { Question } from '../components/QuestionsForm/QuestionsForm.svelte'

  import { swiper } from '../store'
  import Page from '../components/Page.svelte'
  import Experience from '../components/Experience.svelte'
  import PostExperience from './PostExperience.svelte'

  const experiences = getExperiencesConfigs()

  let questions: Question[][] = []

  const onFormSubmit = (questionIndex: number): void => {
    $swiper.slideNext()
    console.log(questions[questionIndex])
  }
</script>

{#each experiences as { value, displayChunkLength, inputChunkLength}, i}
  <Page class="d-flex justify-content-center">
    <section class="mt-5">
      <Experience
        currentIndex={i}
        {value}
        {displayChunkLength}
        {inputChunkLength}
      />
    </section>
  </Page>
  <Page>
    <PostExperience 
      onSubmit={() => onFormSubmit(i)}
      bind:questions={questions[i]} 
    />
  </Page>
{/each}

<style>
  @media screen and (min-width: 992px) {
    section {
      margin-top: 20vh!important;
    }
  }
</style>