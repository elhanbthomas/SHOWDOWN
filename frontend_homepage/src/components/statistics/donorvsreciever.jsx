
import { useState,useRef,useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
// stats.jsx
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {

    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
function Multi({chartConfigs,chartDatas}){

 return(
    <>
<Card >
<CardHeader>
  <CardTitle>Line Chart - Multiple</CardTitle>
  <CardDescription>January - June 2024</CardDescription>
</CardHeader>
<CardContent>
  <ChartContainer config={chartConfigs} className="h-[30vh] w-[50vw]">
    <LineChart
      accessibilityLayer
      data={chartDatas}
      margin={{
        left: 12,
        right: 12,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 4)}
      />
      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      <Line
        dataKey="donor"
        type="monotone"
        stroke="green"
        strokeWidth={2}
        dot={false}
      />
      <Line
        dataKey="receiver"
        type="monotone"
        stroke="red"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ChartContainer>
</CardContent>
<CardFooter>
  <div className="flex w-full items-start gap-2 text-sm">
    <div className="grid gap-2">
      <div className="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
      </div>
      <div className="flex items-center gap-2 leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </div>
  </div>
</CardFooter>
</Card>
</>

    )
}
export default Multi