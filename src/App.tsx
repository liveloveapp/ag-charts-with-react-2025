import { ChangeEvent, useState } from 'react';
import './App.css';
import { BarChart } from './components/BarChart.tsx';
import { BubbleChart } from './components/BubbleChart.tsx';
import { ComboChart } from './components/ComboChart.tsx';
import { DonutChart } from './components/DonutChart.tsx';
import LineChart from './components/LineChart';
import { PieChart } from './components/PieChart.tsx';

enum ChartType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie',
  Combo = 'combo',
  Donut = 'donut',
  Bubble = 'bubble',
}

function App() {
  const [chartType, setChartType] = useState<ChartType>(ChartType.Bar);

  const handleChartTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setChartType(event.target.value as ChartType);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Learn AG Charts with LiveLoveApp</h1>
        <div className="actions">
          <select onChange={handleChartTypeChange}>
            <option value={ChartType.Line}>Line Chart</option>
            <option value={ChartType.Bar}>Bar Chart</option>
            <option value={ChartType.Pie}>Pie Chart</option>
            <option value={ChartType.Combo}>Combo Chart</option>
            <option value={ChartType.Donut}>Donut Chart</option>
            <option value={ChartType.Bubble}>Bubble Chart</option>
          </select>
        </div>
      </div>
      <div className="content">
        <div className="chart">
          {chartType === ChartType.Line && <LineChart />}
          {chartType === ChartType.Bar && <BarChart />}
          {chartType === ChartType.Pie && <PieChart />}
          {chartType === ChartType.Combo && <ComboChart />}
          {chartType === ChartType.Donut && <DonutChart />}
          {chartType === ChartType.Bubble && <BubbleChart />}
        </div>
      </div>
    </div>
  );
}

export default App;
