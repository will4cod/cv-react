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
            descricao: "aprendendo desde a base tanto para o frontend quanto para o backend, aprendndo na pratica HTML, CSS, JavaScript, Nodejs, GIT e MySql."
        },
        {
            id: 2,
            curso: "Análise e desenvolvimento de sistemas",
            escola: "Universidade Paulista",
            ano: "2018 - 2019",
            cidade: "São paulo",
            descricao: "Desenvolvendo a logica de programação, aprendendos conceitos de gestão de projeto e aprendendo C# e MySql."    
        }, 
        {
            id: 3,
            curso: "Desenvolvimento de sistemas",
            escola: "Etec Dr. Emílio Hernandez Aguilar",
            ano: "2015 - 2017",
            cidade: "Franco da rocha",
            descricao: "Primeiro contato com o desenvolvimento, aprendendo conceitos e entendo o que é logica de programação. Tendo o primeiro contato com as tecnologias C#, MySql e a parte web."    
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