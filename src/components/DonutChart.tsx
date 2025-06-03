import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useRollupData } from '../hooks/useRollupData.ts';

export function DonutChart(): ReactElement {
  const data = useRollupData();

  const options: AgChartOptions = useMemo(() => {
    return {
      data,
      title: {
        text: 'Flight Time by Month (Donut)',
      },
      series: [
        {
          type: 'donut',
          angleKey: 'time',
          legendItemKey: 'label',
          calloutLabelKey: 'label',
          innerRadiusRatio: 0.6,
        },
      ],
      theme,
    };
  }, [data]);

  return <AgCharts options={options} />;
}
