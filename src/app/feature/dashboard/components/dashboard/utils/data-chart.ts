import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions?: ApexPlotOptions | any;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill?: ApexFill | any;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend?: ApexLegend | any;
  markers?: ApexMarkers | any;
  grid? : ApexGrid | any;
};

export let chartOptions: ChartOptions = {
  series: [
    {
      name: 'This week',
      data: [44, 42, 57, 86, 58,54,60],
      color: '#a6acb3',
    },
    {
      name: 'Last week',
      data: [26, 35, 41, 78, 46,34,29],
      color: 'var(--hoverColor)',
    },
  ],
  chart: {
    type: 'area',
    height: 420,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['mon','tue','wed','thu','fri','sat','sun'],
  },
  yaxis: {
    // title: {
    //   text: "$ (thousands)"
    // }
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

export let chartOptions1: ChartOptions = {
  series: [
    {
      name: 'This week',
      data: [22, 21, 23, 42, 29,27,30],
      color: 'var(--hoverColor)',
    },
  ],
  chart: {
    type: 'area',
    height: 170,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['mon','tue','wed','thu','fri','sat','sun'],
  },
  yaxis: {
    // title: {
    //   text: "$ (thousands)"
    // }
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};

export let chartOptions2: ChartOptions = {
  series: [
    {
      name: 'This week',
      data: [22, 21, 23, 42, 29,27,30],
      color: 'var(--hoverColor)',
    },
  ],
  chart: {
    type: 'area',
    height: 170,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['mon','tue','wed','thu','fri','sat','sun'],
  },
  yaxis: {
    // title: {
    //   text: "$ (thousands)"
    // }
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};