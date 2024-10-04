"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { GraphData } from "@/lib/DataType"

const chartConfig = {
  temperature: {
    label: "Temperature",
    color: "hsl(var(--chart-1))",
  },
  humidity: {
    label: "Humidity",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Graph( { className, isFreezer, chartData }: { className: string, isFreezer: boolean, chartData: GraphData[] }) {

  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("temperature")

  if (!chartData || chartData.length === 0) {
    return (
      <Card className={className}>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>{isFreezer ? "Freezer" : "Refrigerator"}</CardTitle>
            <CardDescription>No data available</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <div className="h-[250px] w-full flex items-center justify-center">
            <p className="text-lg text-muted-foreground">No data to display</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={ className }>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{ isFreezer ? "Freezer" : "Refrigerator" }</CardTitle>
          <CardDescription>
            Showing temperature and humidity data for the last 1 weeks
          </CardDescription>
        </div>
        <div className="flex">
          {["temperature", "humidity"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-2xl">
                  {key === "temperature" ? chartData[chartData.length - 1].temperature + "°C" : chartData[chartData.length - 1].humidity + "%" }
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleString("ko-KR", {
                  month: "2-digit",  // 월 표시 (01, 02 등)
                  day: "2-digit",    // 일 표시 (01, 02 등)
                  hour: "2-digit",   // 시간 표시 (00, 01 등)
                  minute: "2-digit", // 분 표시 (00, 01 등)
                  hour12: false,
                }).replace(", ", " "); // "월/일 시간:분" 형식으로 표시
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleString("ko-KR", {
                      month: "2-digit",  // 월 표시 (01, 02 등)
                      day: "2-digit",    // 일 표시 (01, 02 등)
                      hour: "2-digit",   // 시간 표시 (00, 01 등)
                      minute: "2-digit", // 분 표시 (00, 01 등)
                      hour12: false,
                    }).replace(", ", " "); // "월/일 시간:분" 형식으로 표시
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
