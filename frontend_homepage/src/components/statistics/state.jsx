
import { useState,useRef,useEffect } from 'react'

import Statebox from './statebox'

import './state.css'

function States(){
    const chartData = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 90, fill: "var(--color-other)" },
      ]
      
      const chartConfig = {
        visitors: {
          label: "Visitors",
        },
        chrome: {
          label: "Chrome",
          color: "hsl(var(--chart-1))",
        },
        safari: {
          label: "Safari",
          color: "hsl(var(--chart-2))",
        },
        firefox: {
          label: "Firefox",
          color: "hsl(var(--chart-3))",
        },
        edge: {
          label: "Edge",
          color: "hsl(var(--chart-4))",
        },
        other: {
          label: "Other",
          color: "hsl(var(--chart-5))",
        },
      } 
   

    return(

<>
 <div className="state">
    <div className='state_thumbnail_flex'>
        <div className='state_thumbnail_relative'>
   <div className='state_thumbnail'>STATES(DONORS)</div>
     </div>
   </div>
   <div className='state_graph'>
  <Statebox  chartData={chartData} chartConfig={chartConfig}/>
  </div>
  </div>

</>



    )
}

export default States