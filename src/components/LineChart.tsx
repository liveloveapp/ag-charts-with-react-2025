import { AgChartOptions, time } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useData } from '../hooks/useData.ts';

export default function LineChart(): ReactElement {
  const data = useData();

  const options: AgChartOptions = useMemo(() => {
    return {
      data,
      title: {
        text: 'Flight Time',
      },
      series: [
        {
          type: 'line',
          xKey: 'date',
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
          type: 'time',
          position: 'bottom',
          interval: { step: time.month },
          label: {
            format: '%b %Y',
          },
        },
      ],
      theme,
    };
  }, [data]);

  return <AgCharts options={options} />;
}
