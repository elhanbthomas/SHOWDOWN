'use client'

import { useState,useRef,useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
// stats.jsx
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import './stats.css'
import Multi from './donorvsreciever'
import Report from './report' 
import States from './state'
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
function Stats(){
    const chartData = [
        { month: "2020", donor: 186, receiver: 80 },
        { month: "2021", donor: 305, receiver: 200 },
        { month: "2022", donor: 237, receiver: 120 },
        { month: "2023", donor: 730, receiver: 190 },
       
      ]
      
      const chartConfig = {

        donor: {
          label: "donor",
          color: "#2563eb",
        },
        reciever: {
          label: "receiver",
          color: "#60a5fa",
        },
      } 


return (
    <>
    <div className='donor_receiver_flex'>
    <div className='donor_receiver_thubmnail'>
     < div className="donor">
    <div className='thumbnail_donor'>DONOR </div>
      
      
      <div className="color_donor"></div>
      </div>
      
      < div className="receiver">

      <div className='thumbnail_receiver'> RECEIVER</div>
      <div className="color_receiver"></div>
      </div>     
      </div>

    <div className="donor_receiver">

    <Multi  chartDatas={chartData} chartConfigs={chartConfig}/>
    </div>
    </div>
    <Report/>
    <States/>
</>

)


}
export default Stats