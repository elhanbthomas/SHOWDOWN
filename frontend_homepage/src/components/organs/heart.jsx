

import { useState,useRef,useEffect } from 'react'
import { throttle } from 'lodash';

import './heart.css'
import heart_detail  from '../../assets/heart_detail.png'

import Transplant from './transplantbox';
import Procedure from './procedurebox';
import Recoverybox from './recoverybox';
import anime from "animejs/lib/anime.es.js";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Heart(){
    useEffect(()=>{


      console.log("useffect")
    })
  //console.log(ArrowForwardIosIcon)

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
     const animation3= useRef(null); 
     const animation4= useRef(null); 

     const[counts,setcount]=useState(1)
     const [inner_width,set_inner]=useState(window.innerWidth)
     const [visible_trans,set_visible_trans]=useState("transplant_prepare")
     const [visible_procedure,set_visible_procedure]=useState("procedure")

     
      
       function handle_prepare(){
        console.log(counts,"handle_prepare")
       prepare2.current.style.display="block"
        animation1.current=anime.timeline({
          easing:'easeOutExpo'
         
         
         
          })
      //  console.log("hi")
       set_visible_trans("transplant_prepare_not_visible")
       prepare2.current.style.left="-20vw"
        console.log("hi", prepare2.current.style.left)
        //console.log((prepare2.current.offsetLeft))
        const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
             let pxx=(69/ 100) * viewportWidth-420; // Convert vw to pixels
          // console.log(pxx)
        animation1.current.add({

          targets:prepare2.current,
          translateX:['0',pxx],
          duration:2000,
          complete: function(anim) {
            // This function will be called after the animation completes
            console.log("Animation completed",prepare2.current.getBoundingClientRect().left,counts,'a');
          


          }
          })
         
        
       }



       function handle_prepare2(){
 prepare3.current.style.display="block"

        animation2.current=anime.timeline({
          easing:'easeOutExpo'
         
         
         
          })
        set_visible_procedure("procedure_not_visible")
        prepare3.current.style.left="-20vw"
        const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
             let pxx=(69/ 100) * viewportWidth-440; // Convert vw to pixels
        //   console.log(pxx)
        animation2.current.add({

          targets:prepare3.current,
          translateX:['0',pxx],
          duration:2000,
          complete: function(anim) {
            // This function will be called after the animation completes
            console.log("Animation completed",prepare2.current.getBoundingClientRect().left,counts,'b');
          


          }
          })
         
        
       }

       const handleResize = throttle(() => {
        console.log("resizes",counts)
 if  (counts==2){

       handle_prepare();
       }
    else if(counts==3){ 
      handle_prepare();

     handle_prepare2();
     }
      },1);
       window.addEventListener('click', handleResize);
       



       function handle_forwardarrow(){
        console.log("hi",counts,"bye")
       if(counts==3){
           return 
         
       }
       else if(counts==2){
              handle_prepare2()
               setcount(counts+1);


       }
       else if(counts==1){

       handle_prepare()
       setcount(counts+1);

        console.log(counts)

        return;



       }


       }
/////back

function handle_prepare2_back(){
 
         animation3.current=anime.timeline({
           easing:'easeInExpo',
          
           autoplay: false // Prevent it from starting automatically

          
           })
         const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
              let pxx=(100/ 100) * viewportWidth; // Convert vw to pixels
         //   console.log(pxx)
         animation3.current.add({
 
           targets:prepare3.current,
           translateX:[-pxx],
           duration:800,
           complete: function(anim) {
             // This function will be called after the animation completes
             console.log("Animation completed",prepare2.current.getBoundingClientRect().left,counts,'c');
           
 
 
           }
           })
           .add({
 
            targets:prepare2.current,
            opacity:[0,1],
            duration:200,
            offset:'-700',
            complete: function(anim) {
              // This function will be called after the animation completes
              console.log("Animation completed","offset",'d');
            
  
  
            }
            })
            
            animation3.current.play();

        }

//////
function handle_prepare_back(){
  console.log(counts,"handle_prepare")
  animation4.current=anime.timeline({
    easing:'easeInExpo'
   
   
   
    })
//  console.log("hi")
set_visible_trans("transplant_prepare_visible")
prepare1.current.style.opacity=0.2
  console.log("hi", prepare2.current.style.left)
  //console.log((prepare2.current.offsetLeft))
  const viewportWidth = window.innerWidth; // Get the width of the viewport in pixels
       let pxx=(100/ 100) * viewportWidth // Convert vw to pixels
    // console.log(pxx)
  animation4.current.add({

    targets:prepare2.current,
    translateX:[-pxx],
    duration:2000,
    complete: function(anim) {
      // This function will be called after the animation completes
      console.log("Animation completed",prepare2.current.getBoundingClientRect().left,counts,'e');
    


    }
    })
    .add({
 
      targets:prepare1.current,
      opacity:[0.2,1],
      duration:100,
      offset:'-700',
      complete: function(anim) {
        // This function will be called after the animation completes
        console.log("Animation completed","offset",'df');
      


      }
      })


   
  
 }


       function handle_backwardarrow(){
        console.log("backs",counts)
        if(counts==3){
          set_visible_procedure("procedure")

          handle_prepare2_back()
          setcount(counts-1);

            return 
          
        }
        else if(counts==2){

          handle_prepare_back()
          setcount(counts-1);

            return 
 
 
        }
        else if(counts==1){
         return;
 
 
        }
 
 
        }
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


<div className='heart_transplant_thumbnail' >

About a heart transplant operation 

</div>
 <div className='arrow_forward'onClick={handle_forwardarrow}><ArrowForwardIosIcon/></div>
 <div className='arrow_backward' onClick={handle_backwardarrow}><ArrowBackIosIcon/></div>


<div className='transplant_prepare_flex_'  >
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