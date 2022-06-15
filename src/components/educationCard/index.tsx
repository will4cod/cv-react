import Educations from 'components/interfaces';
import './style.css';


function EducationCard(props:Educations) {

    return(
        <div className='content'>

            <p className='course'>{props.curso}</p>

            <div className='organization'>
               <p>{props.escola}</p>
               <p>|</p>
               <p>{props.ano},</p>
               <p>{props.cidade}</p>
           </div>

           <p className='description'>{props.descricao}</p>

        </div>
    )
}

export default EducationCard;