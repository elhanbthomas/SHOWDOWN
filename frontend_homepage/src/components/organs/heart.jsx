

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

    const  trans_items_heart_1=
    [
      "Select your primary support person - Choose someone you feel close to who has the time, health, and flexibility to be your caregiver, ensuring you do not feel like a burden to them.",
      "Prepare a phone or email tree - This will make it easier for your caregiver to update friends and family, thereby reducing the volume of calls and emails they have to manage.",
      "Organize your personal affairs - Fill out an advanced directive, write a will, and share access to bank accounts, email, or blogs with a trusted loved one. Complete necessary paperwork such as Family Medical Leave Act, insurance, or loan deferment forms.",
      "Consider dependent care - Find someone trustworthy to take care of your children and/or pets. Ask your doctor when you can expect to see them after your transplant.",
      "Arrange transportation - Plan how to get to the transplant center quickly when you get the call that an organ is available. If you're relocating, make housing arrangements beforehand.",
      "Pack your bags - Be ready to leave as soon as you get the call that an organ is available. Include insurance information, a list of medications, an extra 24-hour supply of medication, and other essentials."
    ];
    

    const transplant_Procedures = [
      "Orthotopic Approach-",
      "Heart Replacement - This common procedure involves replacing the recipient's heart with the donor heart.",
      "Donor Heart Preparation - The donor heart is removed, preserved, and packed for transport. It must be transplanted within four to five hours.",
      "Anesthesia and Bypass Machine - The recipient is given general anesthesia and placed on a bypass machine to oxygenate the blood during the transplant.",
      "Removal of Recipient’s Heart - The recipient's heart is removed to make space for the donor heart.",
      "Donor Heart Fitting - The donor heart is prepared to fit into the recipient’s chest.",
      "Implantation - The donor heart is implanted, and the surgery is completed.",
      
      "Heterotopic Approach-",
      "Heart Addition - In this rare procedure, the recipient's heart is left in place, and the donor heart is connected to the right side of the chest.",
      "Piggyback Transplantation - Also known as 'piggyback' transplantation, it allows the new heart to assist the original heart if complications arise.",
      "Advantages - The new heart can act as an assist device, providing support in case of complications.",
      "Physician Consultation - Your physician will explain why this approach may better suit your needs."
    ];


    const recoveryProcess = [
      "Postoperative Care Team - Recovery begins with a team of health professionals who provide continuous care and monitoring to ensure proper recovery.",
      "Comprehensive Monitoring - Post-surgical monitoring evaluates the body’s response to the new organ, checking for signs of rejection or complications.",
      "Time in Recovery Room - The amount of time spent in the recovery room varies from patient to patient, depending on individual recovery needs.",
      "Waking Up from Surgery - Recovery time includes gradually waking up from anesthesia and gaining awareness before moving on to the next phase of recovery.",
      "Preparation for Discharge - The time it takes to reach the point where you are ready to go home will differ among patients, based on how well you’re healing.",
      "Individual Recovery Experience - Since recovery experiences are unique, it is essential to consult with your physician about what to expect during your recovery process."
    ];
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


<div className='heart_transplant_thumbnail' onClick={handleResize} >

About a heart transplant operation 

</div>
 <div className='arrow_forward'onClick={handle_forwardarrow}><ArrowForwardIosIcon/></div>
 <div className='arrow_backward' onClick={handle_backwardarrow}><ArrowBackIosIcon/></div>


<div className='transplant_prepare_flex_'  >
<div ref={prepare1} className='transplant_prepare_final' ><Transplant  list_items={trans_items_heart_1} visible={visible_trans}/></div>
</div>
{<div ref={prepare2}  className='procedure_prepare'><Procedure  list_items={transplant_Procedures} visible={visible_procedure}/>  </div>
}


<div ref={prepare3}  className='recoverys'><Recoverybox  list_items={recoveryProcess} />

</div>
  


</>

);


}

export default  Heart;