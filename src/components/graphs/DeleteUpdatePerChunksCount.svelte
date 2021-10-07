<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { _ } from 'svelte-i18n'
  import Highcharts from 'highcharts'

  import type { ChunkLength, Experiment } from '../../types'

  import { ALPHANUMERIC_LENGTH, CHUNK_SIZES } from '../../const'
  import { getChunkSizes, getFilteredEventsByTypes, getFilteredExperiencesByChunkSize } from '../../utils'

  export let experiments: Experiment[]

  const getChartCategories = (): ChunkLength[] => {
    return [...CHUNK_SIZES, ALPHANUMERIC_LENGTH]
  }

  const getEventsAmountOfDeleteOrReplace = (events: Experiment['events']): number=> {
    return getFilteredEventsByTypes(events, [
      'delete',
      'replace'
    ]).length
  }

  const getDisplaySerie = (): (number | null)[] => {
    return getChunkSizes().map((size) => {
      const filteredExperiments = getFilteredExperiencesByChunkSize(experiments, size, 'display')

      let count = 0

      filteredExperiments.forEach(filteredExperiment => {
        count += getEventsAmountOfDeleteOrReplace(filteredExperiment.events)
      })

      return count
    })
  }

  const getInputSerie = (): (number | null)[] => {
    return getChunkSizes().map((size) => {
      const filteredExperiments = getFilteredExperiencesByChunkSize(experiments, size, 'input')

      let count = 0

      filteredExperiments.forEach(filteredExperiment => {
        count += getEventsAmountOfDeleteOrReplace(filteredExperiment.events)
      })

      return count
    })
  }

  const initChart = (): void => {
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: $_('results.delete_update_per_chunks_count_graph.title') // TODO: Localize
      },
      xAxis: {
        categories: getChartCategories(),
        crosshair: true,
        title: {
          text: $_('results.delete_update_per_chunks_count_graph.xAxis')
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: $_('results.delete_update_per_chunks_count_graph.yAxis')
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
        + '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: $_('results.delete_update_per_chunks_count_graph.input'),
          data: getInputSerie()
        },
        {
          name: $_('results.delete_update_per_chunks_count_graph.display'),
          data: getDisplaySerie()
        }
      ]
    })
  }

  onMount(() => {
    initChart()
  })
</script>

<div id="container" class="rounded" transition:fade />
