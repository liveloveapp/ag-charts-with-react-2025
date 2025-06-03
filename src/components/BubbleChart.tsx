import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useData } from '../hooks/useData.ts';

interface AircraftStats {
  aircraft_id: string;
  flight_count: number;
  total_time: number;
  avg_time: number;
}

export function BubbleChart(): ReactElement {
  const data = useData();

  const aircraftStats = useMemo(() => {
    const stats = data.reduce<Record<string, AircraftStats>>((acc, flight) => {
      const id = flight.aircraft_id;
      if (!acc[id]) {
        acc[id] = {
          aircraft_id: id,
          flight_count: 0,
          total_time: 0,
          avg_time: 0,
        };
      }
      acc[id].flight_count++;
      acc[id].total_time += flight.time;
      acc[id].avg_time = acc[id].total_time / acc[id].flight_count;
      return acc;
    }, {});

    return Object.values(stats);
  }, [data]);

  const options: AgChartOptions = useMemo(() => {
    return {
      data: aircraftStats,
      title: {
        text: 'Aircraft Usage Analysis',
      },
      series: [
        {
          type: 'bubble',
          xKey: 'flight_count',
          yKey: 'total_time',
          sizeKey: 'avg_time',
          xName: 'Number of Flights',
          yName: 'Total Flight Time',
          sizeName: 'Average Flight Time',
          title: 'Aircraft',
          tooltip: {
            renderer: (params) => {
              const datum = params.datum as AircraftStats;
              return {
                title: datum.aircraft_id,
                content: [
                  `Number of Flights: ${datum.flight_count}`,
                  `Total Time: ${datum.total_time.toFixed(1)} hours`,
                  `Average Time: ${datum.avg_time.toFixed(1)} hours`,
                ].join('<br />'),
              };
            },
          },
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'Total Flight Time (hours)',
          },
        },
        {
          type: 'number',
          position: 'bottom',
          title: {
            text: 'Number of Flights',
          },
        },
      ],
      theme,
    };
  }, [aircraftStats]);

  return <AgCharts options={options} />;
}
