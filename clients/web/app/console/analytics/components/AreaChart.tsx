import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart as ReChartsAreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';
import { Paper } from '@mantine/core';

const AreaChart = ({ analyticsProject, chartAxes, color }: {
  analyticsProject: AnalyticsProjectType; chartAxes: {
    X: string;
    Y: string;
  };
  color: string;
}) => {
  return (
    // <Paper m={"xs"} withBorder w={"100%"} h={"100%"} shadow={"xs"} radius={"sm"}>
    <ResponsiveContainer key={analyticsProject.spreadsheet} height={"100%"} aspect={2.8}>
      <ReChartsAreaChart data={analyticsProject.data}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={1.0} />
            <stop offset="95%" stopColor={color} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey={chartAxes.X} />
        <YAxis dataKey={chartAxes.Y} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type={"monotone"} dataKey={chartAxes.Y} stroke={color} fillOpacity={1} fill="url(#chartColor)" />
      </ReChartsAreaChart>
    </ResponsiveContainer>
    // </Paper>
  );
}

export default AreaChart;