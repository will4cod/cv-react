import Contact from 'components/contact';
import ImageProfile from 'components/ImageProfile';
import Skills from 'components/skills';
import './style.css';

function SideBar() {

    return (
        <div className='barra-lateral'>

            <ImageProfile />

            <Skills />

            <Contact />
        </div>
    );

}

export default SideBar;