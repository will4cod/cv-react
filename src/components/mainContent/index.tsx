import Education from "components/education";
import Expirence from "components/experience";
import Yourself from "components/yourself";

function MainContent() {

    const education =
    {
        curso: "teste",
        escola: "school",
        ano: "2019",
        cidade: "Franco da rocha",
        descricao: "alo"
    }


    console.log(typeof education.curso);

    return (
        <div className="main-content">

            <Yourself />

            <Expirence />

            <Education curso={education.curso} escola= {education.escola} ano={education.ano} cidade={education.cidade} descricao={education.descricao} />
        </div>
    );
}

export default MainContent