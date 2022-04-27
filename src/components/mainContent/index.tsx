import Education from "components/education";
import Expirence from "components/experience";
import Yourself from "components/yourself";

function MainContent() {

    return (
        <div className="main-content">

            <Yourself />

            <Expirence />

            <Education />
        </div>
    );
}

export default MainContent;