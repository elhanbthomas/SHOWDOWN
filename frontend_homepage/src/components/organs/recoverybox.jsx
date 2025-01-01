import './recoverybox.css'
import Recovery from '../../assets/recovery.png'
import { useState,useRef,useEffect } from 'react'

function Recoverybox({list_items,visible}){

const [flex,setflex]=useState("recovery_prepare_flex")
useEffect(() => {
  if (visible === "recovery_prepare_not_visible") {
    setflex("recovery_prepare_flex_not_visible");
  } else if (visible !== "recovery_prepare_not_visible") {
    setflex("recovery_prepare_flex");
  }
}, [visible]);

    return(


<>

<div className={flex}>
    <div className={visible}>
<div className="recovery_prepare_thumbnail">
    <img src={Recovery} className="recovery_prepare_hospital_img"/>
</div>
<div className='recovery_prepare_short'><b> Recovery</b>
</div>
    
<ol className='recovery_prepare_step'>
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

export default Recoverybox;