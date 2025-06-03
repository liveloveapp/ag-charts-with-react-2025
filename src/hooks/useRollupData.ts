import { useMemo } from 'react';
import { DateTime } from 'luxon';
import { getData } from '../constants/data.ts';

interface BarChartDatum {
  label: string;
  month: number;
  time: number;
}

export function useRollupData(): BarChartDatum[] {
  return useMemo(() => {
    const rollup = getData().reduce<Record<string, number>>((prev, flight) => {
      const month = DateTime.fromJSDate(flight.date).month;
      return {
        ...prev,
        [month]: prev[month] ? prev[month] + flight.time : flight.time,
      };
    }, {});

    return Object.entries(rollup).map<BarChartDatum>(([month, time]) => ({
      label: DateTime.fromObject({ month: Number(month) }).toLocaleString({
        month: 'long',
      }),
      month: Number(month),
      time,
    }));
  }, []);
}
