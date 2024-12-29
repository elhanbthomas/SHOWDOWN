import { useState,useRef,useEffect } from 'react'

import './donor_home.css'
function Donor_home(){

return (
    <>
    <div className='donor_home_thumbnail'> Register for Donor</div>

   <div className='donor_home_flex'>
   

     <div className='donor_home_normal'>

  <label>
    Name:
     <input type="text" name="donor_home_name input" className='donor_home_name input'/>

     </label>
    
     <label>
    Age:
     <input type="text" name="donor_home_age" className='donor_home_age input'/>

     </label>


     <label>
    Email:
     <input type="text" name="donor_home_email" className='donor_home_email input'/>

     </label>

     <label>
      Mobile Number:
     <input type="text" name="donor_home_mob" className='donor_home_mob input'/>

     </label>

     
     <label>
      Aadhaar No:
     <input type="text" name="donor_home_aadhar" className='donor_home_aadhar input'/>

     </label>

     <label>
      Address:
     <input type="text" name="donor_home_address" className='donor_home_address input'/>

     </label>

     <label>
      City:
     <input type="text" name="donor_home_city" className='donor_home_city input'/>

     </label>

     <label>
      State:
     <input type="text" name="donor_home_state" className='donor_home_state input'/>

     </label>

     <label>
      Pincode:
     <input type="text" name="donor_home_pin" className='donor_home_pin input'/>

     </label>
       


     </div>

   </div>
   <button >Register</button>



   </>






)

}

export default Donor_home