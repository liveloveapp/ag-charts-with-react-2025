import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useRollupData } from '../hooks/useRollupData.ts';

export function BarChart(): ReactElement {
  const data = useRollupData();

  const options: AgChartOptions = useMemo(() => {
    return {
      data,
      title: {
        text: 'Flight Time by Month',
      },
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'time',
          yName: 'Flight Time',
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'left',
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
