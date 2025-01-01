import { useState,useRef,useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import {Link} from "react-router"
import './App.css'
import organ1 from './assets/ORGAN1.png'
import organ2 from './assets/ORGAN1.svg'
import team from './assets/team.svg'
import heart from './assets/heart.jpg'
import kidney from './assets/kidney.png'
import liver from './assets/liver.jpg'
import stomach from './assets/stomach.png'
import pancrea from './assets/pancrea.png'
import cornea from './assets/cornea.jpg'
import { Button } from "@/components/ui/button"
import anime from "animejs/lib/anime.es.js";


   


function App() {
  const [count, setCount] = useState(0)
 const [learn_bar,set_learn_bar]=useState(false)
 const inputRef = useRef(null);
 const animation1= useRef(null); // Ref to hold the animation instance
 const animation2= useRef(null); // Ref to hold the animation instance
 animation1.current=anime.timeline({
  easing:"linear"
 
 
 
  })
  animation2.current=anime.timeline({
    easing:"linear"
   
   
   
    })
 const{ref: myref,inView:about}=useInView({
  triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, 
 })
 

 function handleHover(){
  animation2.current.pause()
animation2.current.remove(inputRef.current);
  set_learn_bar(true)
  console.log("hi")
 animation1.current=anime.timeline({
 easing:"linear"



 })

  animation1.current.add({

 targets:inputRef.current,
 width:['0%','90%'],
 duration:500



 })
 console.log(inputRef.current,animation1.current)
 }

 function handle_nothover(){
 set_learn_bar(false)

 animation1.current.pause()
 animation1.current.remove(inputRef.current);

 
animation2.current.add({
  targets:inputRef.current,

width:[inputRef.current.style.width,'0px'],
duration:500

})


 }
  return (
    <>

   

    <div className='headers'>

      <img src={organ1}  className='pic1'/>
    <div className="names"> 
      <h1 className='name1'>ORGOR </h1>
    </div>
    <div className="menu">
      <Link to="/stats">
    <div className="option" >Statistic</div></Link>

    <div className="option" >About Organs</div>
    <Link to="/donor" >
    <div className="option">Register for Donor</div>
    </Link>
    <Link to="/app_hosp" >

    <div className="option">Approved Hospitals</div>
    </Link>
    <div className="option" >Login/Register</div>
     <div className="hamburger">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>
</div>
       </div>
  <div className='about_us_flex'>
       <div  className={`about_us ${about ? 'visible' : ''}`} ref={myref}>
        <div className={`about_front ${about ? 'visible' : ''}`}>ABOUT US</div>
   <div className={`about_detail ${about ? 'visible' : ''}`}>
   At LifeGift, we believe in the power of second chances. As a dedicated organ donation organization, our mission is to transform lives by connecting generous donors with those in need.
    With compassion and commitment,we work tirelessly to ensure that every individual has the opportunity to give and receive the gift of life. 
    

   </div>


       </div>
       </div>
       <div className='stats'>
        
       <h1 className='stats_heading'>STATS</h1> 
       <div className='stats1'>

          <div className="stats_hospitals">
          <div className="stats_hospitals_no">13+</div>
          <div className="stats_hospitals_heading">Approved Hospitals</div>



         </div>


         <div className="stats_acceptors">
          <div className="stats_acceptors_no">14+</div>
          <div className="stats_acceptors_heading">Acceptors</div>

        </div>

        <div className="stats_donors">
          <div className="stats_donors_no">19+</div>
          <div className="stats_donors_heading">Donors</div>

        </div>
        
        </div>
         <div  className="stats_learn" onMouseEnter={handleHover} onMouseLeave={handle_nothover}> Learn more
           <div className='stats_learn_bar' style={{
            width:"0px",
          height:"2px",

          backgroundColor:"red",
          borderRadius:"1px"
           }
           } ref={inputRef}  ></div>
         </div>
        </div>

        <div className='organ_info_flex'>
        <div className='organ_info'>
        <div className='organ_thumbnail'>

          Organ facts and transplants information
        </div>
        <div className='organ_click'>

        <div className='organ_click1'>
          <Link to ="/organ_kidney">
        <div className='organ_kidney'>
         <img src={kidney} alt="kidney" className='organ_kidney_img'/>
        <div className='organ_kidney_headline organ_name_common'>Kidney</div>
        </div>
        </Link>

        {/* heart*/}
        <Link to="/organ_heart">
          <div className='organ_heart'>
          <img src={heart} alt="heart" className='organ_heart_img'/>
         <div className='organ_heart_headline organ_name_common'>Heart</div>
         </div>
         </Link>

         {/* liver*/}
         <div className='organ_liver'>
          <img src={liver} alt="liver" className='organ_liver_img'/>
         <div className='organ_liver_headline organ_name_common'>Liver</div>
         </div>
         </div>
         <div className='organ_click2'>

         {/*stomach*/}
         <div className='organ_stomach'>
         <img src={stomach} alt="stomach" className='organ_stomach_img'/>
        <div className='organ_stomach_headline organ_name_common'>Stomach</div>
        </div>

        {/*cornea*/}
          <div className='organ_cornea'>
          <img src={cornea} alt="cornea" className='organ_cornea_img'/>
         <div className='organ_cornea_headline organ_name_common'>Cornea</div>
         </div>

         {/* pancrea*/}
         <div className='organ_pancrea'>
          <img src={pancrea} alt="pancrea" className='organ_pancrea_img'/>
         <div className='organ_liver_headline organ_name_common'>Pancrea</div>
         </div>
</div>
</div>
        </div>
    
        </div>
    </>


  )
}

export default App
