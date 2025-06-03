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
      series: [],
      axes: [],
      theme,
    };
  }, [data]);

  return <></>;
}
