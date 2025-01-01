import './procedure.css'
import  operation from '../../assets/operation2.png'
import { useState,useRef,useEffect } from 'react'







function Procedure({list_items,visible}){
const [flex,setflex]=useState("transplant_prepare_flex")

useEffect(() => {
  if (visible === "procedure_not_visible") {
    setflex("procedure_flex_not_visible");
  } else if (visible !== "procedure_not_visible") {
    setflex("procedure_flex");
  }
}, [visible]);



    return(


<>

<div className={flex}>
    <div className={visible}>
<div className="procedure_thumbnail">
    <img src={operation} className="procedure_img"/>
</div>
<div className='procedure_short'><b>The Procedure</b>
</div>
    <div className='procedure_description'></div>
<ol className='procedure_step'>
{list_items.map((item, index) => {
        const [beforeHyphen, afterHyphen] = item.split('-');
        return (
          <li key={index}>
            <strong>{beforeHyphen}</strong> - {afterHyphen}
          </li>
        );
      })}
</ol>


</div>
</div>
 </>

    )
}

export default Procedure;