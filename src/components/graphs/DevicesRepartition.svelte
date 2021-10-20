<script lang="ts">
  import { onMount } from 'svelte'
  import Highcharts from 'highcharts'
  
  export let devices: string[]

  const DEVICES = ['desktop', 'mobile']
  const CHART_ID = 'devicesRepartition'

  const getSerie = (): { name: string, y: number}[] => {
    const devicesAmount = devices.length

    return DEVICES.map(DEVICE => {
      return {
        name: DEVICE,
        y: Number(((devices.filter(device => {
          return device === DEVICE
        }).length / devicesAmount) * 100)
          .toFixed(2))
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
        text: 'Devices used'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
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
        name: 'Device',
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
