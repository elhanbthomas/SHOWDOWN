

import { useState,useRef,useEffect } from 'react'

import './heart.css'
import heart_detail  from '../../assets/heart_detail.png'

import Transplant from './transplantbox';
import Procedure from './procedurebox';
import Recoverybox from './recoverybox';
import anime from "animejs/lib/anime.es.js";

function Heart(){
    const  list_items=

    ["Select your primary support person-Choose someone you feel close to who has the time, health, and flexibility to be your caregiver.You need to know you are not aburden to this person. For caregivers,",
    ,"Prepare a phone/email tree- This will make it easier for your caregiver to update friends and family while cutting down on phone or email volume."
    ,"Organize your personal affairs- Consider filling out an advanced directive, writing a will, and sharing access to bank accounts, e-mail, or blogs with a trusted loved one. You may also need to fill out Family Medical Leave Act, insurance, or loan deferment paperwork."
    ,"Consider dependent care- Find someone you trust and set up a plan to take care of your children and/or pets. Ask your doctor when you can expect to see your children and pets after your transplant."
    
    
    
    ]
    const prepare1 = useRef(null);
    const prepare2 = useRef(null);
   const prepare3=useRef(null)
     const animation1= useRef(null); // Ref to hold the animation instance
     const animation2= useRef(null); 
     const [inner_width,set_inner]=useState(window.inner_width)
     const [visible_trans,set_visible_trans]=useState("transplant_prepare")
     const [visible_procedure,set_visible_procedure]=useState("procedure")

     
      
       function handle_prepare(){
        animation1.current=anime.timeline({
          easing:'easeOutExpo'
         
         
         
          })
         console.log("hi")
        set_visible_trans("transplant_prepare_not_visible")
        prepare2.current.style.left="-20vw"
        console.log("hi", prepare2.current.style.left)
        console.log((prepare2.current.offsetLeft))
        const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
             let pxx=(69/ 100) * viewportWidth-420; // Convert vw to pixels
           console.log(pxx)
        animation1.current.add({

          targets:prepare2.current,
          translateX:['0',pxx],
          duration:2000,
          complete: function(anim) {
            // This function will be called after the animation completes
            console.log("Animation completed",prepare2.current.getBoundingClientRect().left);
          


          }
          })
         
        
       }



       function handle_prepare2(){
        animation2.current=anime.timeline({
          easing:'easeOutExpo'
         
         
         
          })
        set_visible_procedure("procedure_not_visible")
        prepare3.current.style.left="-20vw"
        const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
             let pxx=(69/ 100) * viewportWidth-440; // Convert vw to pixels
           console.log(pxx)
        animation2.current.add({

          targets:prepare3.current,
          translateX:['0',pxx],
          duration:2000,
          complete: function(anim) {
            // This function will be called after the animation completes
            console.log("Animation completed",prepare2.current.getBoundingClientRect().left);
          


          }
          })
         
        
       }

       const handleResize = () => {
        if (!prepare2.current) {
          console.log("prepare2.current is null during handle_prepare");
          return; // Guard clause
        }
        const viewportWidth = window.innerWidth;
    let pxx= (prepare1.current.getBoundingClientRect().left/ viewportWidth) * 100; // Convert px to vw
        console.log("bue",prepare1.current.getBoundingClientRect().left,"hi",pxx)
        //why irregualarity in size after .add opaeration check impace of translate xsee prepare2 after icncreaing width
           prepare2.current.style.left=`${prepare1.current.getBoundingClientRect().left-190}px`
           prepare3.current.style.left=`${prepare1.current.getBoundingClientRect().left-190}px`

           console.log(prepare2.current.style.left)

        //handle_prepare();
      };
       window.addEventListener('resize', handleResize);
       

return(

    <>
    <div className="heart">
           <div className="heart_headline">Heart</div>
<div className='heart1_flex'>
<div className="heart_detail">

<img src={heart_detail} alt="heart_photo"  className='heart_detail_img'/>
</div>
<div className="heart1">




 <div className="about_heart" >About Heart</div>

 
<div className="heart_desc">
The heart is a strong and muscular organ that is about the size of a fist in adults.
 It pumps blood throughout the body and is located behind the breastbone between the lungs.
  Deoxygenated blood flows from the heart to the lungs where it gives up carbon dioxide and is freshly oxygenated. 
  From there, the blood returns to the heart and is pumped to the rest of the body.
</div>
</div>

</div>
</div>


<div className='heart_transplant_thumbnail' onClick={handle_prepare}>

About a heart transplant operation 

</div>
<div className='transplant_prepare_flex_'  onClick={handle_prepare2}>
<div ref={prepare1} className='transplant_prepare_final' ><Transplant  list_items={list_items} visible={visible_trans}/></div>
</div>
{<div ref={prepare2}  className='procedure_prepare'><Procedure  list_items={list_items} visible={visible_procedure}/>  </div>
}


<div ref={prepare3}  className='recoverys'><Recoverybox  list_items={list_items} />

</div>
  


</>

);


}

export default  Heart;