import { BarChart as ReChartsBarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, Legend, Bar } from 'recharts';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';
import { Paper } from '@mantine/core';

const BarChart = ({ analyticsProject, chartAxes }: {
  analyticsProject: AnalyticsProjectType, chartAxes: {
    X: string;
    Y: string;
  }
}) => {
  return (
    // <Paper withBorder w={"50%"} h={"80%"} shadow={"xs"} radius={"sm"}>
      <ResponsiveContainer key={analyticsProject.spreadsheet} height={"100%"} aspect={6}>
        <ReChartsBarChart data={analyticsProject.data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={chartAxes.X} />
          <YAxis dataKey={chartAxes.Y} />
          <Tooltip />
          {/* <Legend align={"center"} verticalAlign={"top"} /> */}
          <Bar dataKey={chartAxes.Y} fill="#8884d8" />
        </ReChartsBarChart>
      </ResponsiveContainer>
    // </Paper>
  );
}

export default BarChart;