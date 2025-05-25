"use client";

import { ThermometerSnowflake } from "lucide-react";
import StatsCard from "./StatsCard";

const chartAttributes = {
  hide: true,
  dataKey: "month",
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tickFormatter: (value: string | any[]) => value.slice(0, 3),
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--green-500))",
    attributes: {
      dataKey: "desktop",
      type: "natural",
      fill: "var(--chart-1)",
      fillOpacity: 0.4,
      stroke: "var(--chart-1)",
      stackId: "a",
    },
  },
};

const chartConfig2 = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--green-500))",
    attributes: {
      dataKey: "desktop",
      type: "natural",
      fill: "var(--chart-2)",
      fillOpacity: 0.4,
      stroke: "var(--chart-2)",
      stackId: "a",
    },
  },
};

const chartConfig3 = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--green-500))",
    attributes: {
      dataKey: "desktop",
      type: "natural",
      fill: "var(--chart-3)",
      fillOpacity: 0.4,
      stroke: "var(--chart-3)",
      stackId: "a",
    },
  },
};

const chartConfig4 = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--green-500))",
    attributes: {
      dataKey: "desktop",
      type: "natural",
      fill: "var(--chart-4)",
      fillOpacity: 0.4,
      stroke: "var(--chart-4)",
      stackId: "a",
    },
  },
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

function StatsPanel() {
  return (
    <>
      <div className="bg-primary-foreground p-2 rounded-lg shadow-lg">
        <StatsCard
          config={chartConfig}
          Data={chartData}
          attributes={chartAttributes}
          showChart={true}
          icon={<ThermometerSnowflake className="text-chart-1" />}
          label="Temperature"
          description="50 Readings"
        />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg shadow-lg">
        <StatsCard
          config={chartConfig2}
          Data={chartData}
          attributes={chartAttributes}
          showChart={true}
          icon={<ThermometerSnowflake className="text-chart-2" />}
          label="Humidity"
          description="50 Readings"
        />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg shadow-lg">
        <StatsCard
          config={chartConfig3}
          Data={chartData}
          attributes={chartAttributes}
          showChart={true}
          icon={<ThermometerSnowflake className="text-chart-3" />}
          label="Power Consumption"
          description="50 Readings"
        />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg shadow-lg">
        <StatsCard
          config={chartConfig4}
          Data={chartData}
          attributes={chartAttributes}
          showChart={true}
          icon={<ThermometerSnowflake className="text-chart-4" />}
          label="Object Detection"
          description="50 Readings"
        />
      </div>
    </>
  );
}

export default StatsPanel;
