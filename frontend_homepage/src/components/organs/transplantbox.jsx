
import './transplant.css'
import hospital from '../../assets/hospital.png'
import { useState,useRef,useEffect } from 'react'

function Transplant({list_items,visible}){

const [flex,setflex]=useState("transplant_prepare_flex")
useEffect(() => {
  if (visible === "transplant_prepare_not_visible") {
    setflex("transplant_prepare_flex_not_visible");
  } else if (visible !== "transplant_prepare_not_visible") {
    setflex("transplant_prepare_flex");
  }
}, [visible]);

    return(


<>

<div className={flex}>
    <div className={visible}>
<div className="transplant_prepare_thumbnail">
    <img src={hospital} className="transplant_prepare_hospital_img"/>
</div>
<div className='transplant_prepare_short'>
  <b>Preparing for the hospital</b>
</div>
    
<ol className='transplant_prepare_step'>
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

export default Transplant;