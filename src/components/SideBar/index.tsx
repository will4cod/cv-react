import ImageProfile from 'components/ImageProfile';
import Skills from 'components/skills';
import './style.css';

function SideBar() {

    return (
        <div className='barra-lateral'>
            <p>barra lateral</p>

            <ImageProfile />

            <Skills />
        </div>
    );

}

export default SideBar;