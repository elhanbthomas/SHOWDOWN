import { useState,useRef,useEffect } from 'react'

import Reportbox from './reportbox'

import './report.css'

function Report(){

    const chartData = [
        { month: "2020", Reports: 186 },
        { month: "2021", Reports: 305 },
        { month: "2022", Reports: 237 },
        { month: "2023", Reports: 73 },
        { month: "2024", Reports: 209 },
        { month: "2025", Reports: 214 },
      ]
      const chartConfig = {
        desktop: {
          label: "Reports",
          color: "hsl(var(--chart-1))",
        },
      } 


    return(

<>
 <div className="report">
    <div className='report_thumbnail_flex'>
        <div className='report_thumbnail_relative'>
   <div className='report_thumbnail'>Report</div>
     <div className='report_color'></div>
     </div>
   </div>
   <div className='report_graph'>
  <Reportbox  chartData={chartData} chartConfig={chartConfig}/>
  </div>
  </div>

</>



    )
}

export default Report