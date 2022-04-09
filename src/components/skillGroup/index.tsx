import './style.css';
import Ball from 'components/balls';

function SkillGroup() {

    return (
        <div>

            <p className='skills-group'>Front End</p>

            <div className='points'>

                <p className='skills-name'>HTML5</p>

                <div className='skills-points'>
                    <Ball color='green' />
                    <Ball color='green' />
                    <Ball color='green' />
                    <Ball color='ball' />
                    <Ball color='ball' />
                </div>
            </div>


            <div className='points'>

                <p className='skills-name'>CSS</p>

                <div className='skills-points'>
                    <Ball color='green' />
                    <Ball color='green' />
                    <Ball color='green' />
                    <Ball color='ball' />
                    <Ball color='ball' />
                </div>
            </div>

            <div className='points'>

                <p className='skills-name'>JavaScript</p>

                <div className='skills-points'>
                    <Ball color='green' />
                    <Ball color='green' />
                    <Ball color='black' />
                    <Ball color='ball' />
                    <Ball color='ball' />
                </div>
            </div>

        </div>
    );
}

export default SkillGroup;