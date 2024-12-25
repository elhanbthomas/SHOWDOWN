import './procedure.css'
import  operation from '../../assets/operation2.png'
function Procedure({list_items}){



    return(


<>

<div className="procedure_flex">
    <div className="procedure">
<div className="procedure_thumbnail">
    <img src={operation} className="procedure_img"/>
</div>
<div className='procedure_short'>Preparing for the hospital
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