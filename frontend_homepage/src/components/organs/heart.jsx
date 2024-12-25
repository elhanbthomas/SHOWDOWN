


import './heart.css'
import heart_detail  from '../../assets/heart_detail.png'


function Heart(){


return(

    <>
    <div classname="heart">
           <div className="heart_headline">Heart</div>
<div className='heart1_flex'>
<div className="heart_detail">

<img src={heart_detail} alt="heart_photo"  className='heart_detail_img'/>
</div>
<div className="heart1">




 <div className="about_heart">About Heart</div>

 
<div className="heart_desc">
The heart is a strong and muscular organ that is about the size of a fist in adults.
 It pumps blood throughout the body and is located behind the breastbone between the lungs.
  Deoxygenated blood flows from the heart to the lungs where it gives up carbon dioxide and is freshly oxygenated. 
  From there, the blood returns to the heart and is pumped to the rest of the body.
</div>
</div>

</div>
</div>


<div className='heart_transplant_thumbnail'>

About a heart transplant operation

</div>


</>

);


}

export default  Heart;