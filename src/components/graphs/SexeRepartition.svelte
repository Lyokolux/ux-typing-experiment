<script lang="ts">
  import { onMount } from 'svelte'
  import Highcharts from 'highcharts'
  
  import type { Sexe } from '../../types'

  import { SEXES } from '../../const'

  export let sexes: Sexe[]

  const CHART_ID = 'sexeRepartition'

  const getSexeName = (sexe: Sexe): string => {
    switch (sexe) {
    case 'f':
      return 'Women'
    case 'm':
      return 'Man'
    case 'else':
      return 'Diver'
  
    case 'no-answer': default:
      return 'No answer'
    }
  }

  const getSerie = (): { name: string, y: number}[] => {
    const sexesAmount = sexes.length

    return SEXES.map(SEXE => {
      return {
        name: getSexeName(SEXE),
        y: Number(((sexes.filter(sexe => sexe === SEXE).length / sexesAmount) * 100).toFixed(2))
      }
    })
  }

  const initChart = (): void => {
    // @ts-ignore Why is that a problem?
    Highcharts.chart(CHART_ID, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Sexe repartition'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Sexe',
        colorByPoint: true,
        data: getSerie()
      }]
    })
  }

  onMount(() => {
    initChart()
  })
</script>

<div id={CHART_ID} class="rounded" />
