import './style.css';

interface education  {
    curso: string;
    escola: string;
    ano: string;
    cidade: string;
    descricao: string;
}

function Education(props:education){

    console.log(props.curso);

    return(
        <div className='education'>
            <h2 className='title'>Educação</h2>

            <p className='course'>{props.curso}</p>

            <div className='organization'>
                <p>{props.escola}</p>
                <p>|</p>
                <p>{props.ano},</p>
                <p>{props.cidade}</p>
            </div>

            <p className='description'>{props.descricao}</p>
        </div>
    );
}

export default Education;