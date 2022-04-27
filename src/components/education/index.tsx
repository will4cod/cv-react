import EducationCard from 'components/educationCard';
import './style.css';


function Education(){


    const educationDados = [
        {
            id: 1,
            curso: "Desenvolvimento web FullStack",
            escola: "Digital House Brasil",
            ano: "2021 - 2021",
            cidade: "São paulo",
            descricao: "Tecnico"
        },
        {
            id: 2,
            curso: "Análise e desenvolvimento de sistemas",
            escola: "Universidade Paulista",
            ano: "2018 - 2019",
            cidade: "São paulo",
            descricao: "Tecnólogo"    
        }, 
        {
            id: 3,
            curso: "Desenvolvimento de sistemas",
            escola: "Etec Dr. Emílio Hernandez Aguilar",
            ano: "2015 - 2017",
            cidade: "Franco da rocha",
            descricao: "Tecnico"    
        }

    ]

    
    // for(let i = 0; i < education.length ; i++){
        
    // }
    
    console.log(educationDados.length);
    
    educationDados.map(dado => 
        console.log(dado)
        // <div key={dado.id}>
        //     console.log('teste')
        //     {/* <EducationCard edu={dado} /> */}
        // </div>    
    )
    // education.map(function (dados){
    //     return(
    //         <p className='course'>{dados.curso}</p>
    //     )
    // })

    return(
            
        <div className='education'>
            <h2 className='title'>Educação</h2>

            {/* {education.map(function (dados){
                return(
                    <p className='course'>{dados.curso}</p>
                )
            })}
             */}

            {educationDados.map(dado => 
                    <div key={dado.id}>
                       <EducationCard id={dado.id} curso={dado.curso} escola={dado.escola} ano={dado.ano} cidade={dado.cidade} descricao={dado.descricao} />
                    </div>
            )}

            
        </div>
    );
}

export default Education;