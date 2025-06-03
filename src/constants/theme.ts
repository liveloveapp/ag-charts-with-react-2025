import { AgChartTheme } from 'ag-charts-community';

export const theme: AgChartTheme = {
  palette: {
    fills: ['#a546fe', '#8d2cfd', '#b557ff', '#cb89fe', '#e9cdff', '#10ddd3'],
  },
  overrides: {
    common: {
      background: {
        fill: 'transparent',
      },
      title: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 0.56)',
        spacing: 48,
      },
      padding: {
        left: 56,
        right: 56,
      },
      tooltip: {
        class: 'tooltip',
        showArrow: false,
      },
      legend: {
        item: {
          label: {
            color: 'rgba(255, 255, 255, 0.56)',
          },
        },
      },
      axes: {
        category: {
          label: {
            color: 'rgba(255, 255, 255, 0.56)',
          },
          line: {
            stroke: 'rgba(255, 255, 255, 0.12)',
          },
          tick: {
            enabled: false,
          },
        },
        number: {
          label: {
            color: 'rgba(255, 255, 255, 0.56)',
          },
          line: {
            stroke: 'rgba(0, 0, 0, 0.08)',
          },
          gridLine: {
            style: [
              {
                stroke: 'rgba(255, 255, 255, 0.12)',
              },
            ],
          },
          tick: {
            stroke: 'gray',
          },
        },
        time: {
          label: {
            padding: 16,
            color: 'rgba(255, 255, 255, 0.56)',
          },
          line: {
            stroke: 'rgba(255, 255, 255, 0.56)',
          },
          tick: {
            enabled: true,
            stroke: 'rgba(255, 255, 255, 0.56)',
          },
        },
      },
    },
    line: {
      series: {
        marker: {
          shape: 'circle',
        },
      },
    },
    bar: {
      series: {
        label: {
          enabled: true,
          color: 'white',
        },
      },
    },
    pie: {
      legend: {
        position: 'right',
      },
      series: {
        calloutLabel: {
          enabled: true,
          color: 'rgba(255, 255, 255, 0.56)',
        },
        calloutLine: {
          colors: ['rgba(255, 255, 255, 0.12)'],
        },
      },
    },
  },
};
