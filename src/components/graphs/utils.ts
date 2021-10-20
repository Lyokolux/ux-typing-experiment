import type {
  ChunkLength, Experiment, ExperimentID, Qualification
} from '../../types'
import { ALPHANUMERIC_LENGTH, CHUNK_SIZES } from '../../const'
import { getAverage, getExperienceIds } from '../../utils'

export const getChartCategories = (): ChunkLength[] => {
  return [...CHUNK_SIZES, ALPHANUMERIC_LENGTH]
}

export const getExperienceDuration = (experience: Experiment): number | null => {
  const lastEvent = experience.events[experience.events.length - 1]

  if (lastEvent) {
    return lastEvent.ms / 1000
  }

  return null
}

export const getExperimentQuestionsAverage = (questions: Experiment['questions']): Experiment['questions'] => {
  // get unique ids
  const questionIds: [string, string][] = []

  questions.map(question => question.ids).forEach(question => {
    const exists = questionIds.some(questionId => {
      return questionId[0] === question[0] && questionId[1] === question[1]
    })

    if (!exists) {
      questionIds.push(question)
    }
  })

  const average: Experiment['questions'] = []

  questionIds.forEach(questionId => {
    const matchingQuestions = questions.filter(question => {
      return question.ids[0] === questionId[0] && question.ids[1] === questionId[1]
    })

    const grades = matchingQuestions.map(matchingQuestion => matchingQuestion.grade)

    average.push({
      ids: questionId as [Qualification, Qualification],
      grade: Number(getAverage(grades).toFixed(2))
    })
  })

  return average
}

export const getExperimentsAverage = (experiments: Experiment[]): Experiment[] => {
  const finalExperiments: Experiment[] = []
  const experimentIds = getExperienceIds()

  experimentIds.forEach(experimentId => {
    const matchingExperiments = experiments.filter(experiment => {
      return experiment.id === experimentId
    })

    finalExperiments.push({
      id: experimentId as ExperimentID,
      events: matchingExperiments.map(matchingExperiment => {
        return matchingExperiment.events
      }).flat(),
      questions: getExperimentQuestionsAverage(matchingExperiments.map(matchingExperiment => {
        return matchingExperiment.questions
      }).flat())
    })
  })

  return finalExperiments
}
