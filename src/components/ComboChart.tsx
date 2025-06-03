import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useRollupData } from '../hooks/useRollupData.ts';

export function ComboChart(): ReactElement {
  const data = useRollupData();

  const options: AgChartOptions = useMemo(() => {
    return {
      data,
      title: {
        text: 'Flight Time Analysis',
      },
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'time',
          yName: 'Monthly Flight Time',
        },
        {
          type: 'line',
          xKey: 'month',
          yKey: 'time',
          yName: 'Trend',
          marker: {
            enabled: true,
          },
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'Flight Time (hours)',
          },
        },
        {
          type: 'category',
          position: 'bottom',
          label: {
            formatter: (params) => data[params.index].label,
          },
        },
      ],
      theme,
    };
  }, [data]);

  return <AgCharts options={options} />;
}
