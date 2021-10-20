<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { _ } from 'svelte-i18n'
  import Highcharts from 'highcharts'

  import type { Experiment } from '../../types'

  import { getAverage, getChunkSizes, getFilteredExperiencesByChunkSize } from '../../utils'
  import { getChartCategories, getExperienceDuration } from './utils'

  export let experiments: Experiment[]

  const CHART_ID = 'durationPerChunksChart'

  const roundToNDigits = (n: number, precision = 2) => (
    Math.floor(n * 10 ** precision) / (10 ** precision)
  )

  const getDisplaySerie = (): number[] => {
    return getChunkSizes().map((size) => {
      const filteredExperiments = getFilteredExperiencesByChunkSize(experiments, size, 'display')

      return roundToNDigits(
        getAverage(filteredExperiments.map(experiment => getExperienceDuration(experiment)))
      )
    })
  }

  const getInputSerie = (): number[] => {
    return getChunkSizes().map((size) => {
      const filteredExperiments = getFilteredExperiencesByChunkSize(experiments, size, 'input')

      return roundToNDigits(
        getAverage(filteredExperiments.map(experiment => getExperienceDuration(experiment)))
      )
    })
  }

  const initChart = (): void => {
    // @ts-ignore Why is that a problem?
    Highcharts.chart(CHART_ID, {
      chart: {
        type: 'column'
      },
      title: {
        text: $_('results.duration_per_chunks_graph.title')
      },
      xAxis: {
        categories: getChartCategories(),
        crosshair: true,
        title: {
          text: $_('results.duration_per_chunks_graph.xAxis')
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: $_('results.duration_per_chunks_graph.yAxis')
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:12px">Chunk size: {point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>'
        + '<td style="padding:0;font-size:13px"><b>{point.y}</b></td></tr>',
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
          name: $_('results.input'),
          data: getInputSerie()
        },
        {
          name: $_('results.display'),
          data: getDisplaySerie()
        }
      ]
    })
  }

  onMount(() => {
    initChart()
  })
</script>

<div id={CHART_ID} class="rounded" transition:fade />
