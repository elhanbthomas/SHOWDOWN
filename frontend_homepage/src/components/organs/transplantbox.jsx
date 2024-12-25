
import './transplant.css'
import hospital from '../../assets/hospital.png'
function Transplant({list_items}){



    return(


<>

<div className="transplant_prepare_flex">
    <div className="transplant_prepare">
<div className="transplant_prepare_thumbnail">
    <img src={hospital} className="transplant_prepare_hospital_img"/>
</div>
<div className='transplant_prepare_short'>Preparing for the hospital
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