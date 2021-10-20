<script lang="ts">
  import { onMount } from 'svelte'
  import Highcharts from 'highcharts'
  
  import type { Age } from '../../types'

  import { AGES } from '../../const'

  export let ages: Age[]

  const CHART_ID = 'ageRepartition'

  const getSerie = (): number[] => {
    return AGES.map(AGE => {
      return ages.filter(age => age === AGE).length
    })
  }

  const initChart = (): void => {
    // @ts-ignore Why is that a problem?
    Highcharts.chart(CHART_ID, {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Age repartition'
      },
      xAxis: {
        categories: AGES,
        crosshair: true,
        title: {
          text: 'age'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
        + '<td style="padding:0"><b>{point.y}%</b></td></tr>',
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
          name: 'age',
          data: getSerie()
        }
      ]
    })
  }

  onMount(() => {
    initChart()
  })
</script>

<div id={CHART_ID} class="rounded" />
