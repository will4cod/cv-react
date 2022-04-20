import './style.css'
import iconAdress from 'assets/img/endereco-residencial.png';
import iconPhone from 'assets/img/celular.png';
import iconEmail from 'assets/img/email.png';
import iconLinkedin from 'assets/img/linkedin.png';
import iconGitHub from 'assets/img/github.png';

function Contact() {

    return (
        <div className='contact'>

            <h1 className='title'>contact</h1>


            <div className='dados'>
                <img src={iconAdress} alt="icone de endereço" className='icon' />
                <p>Franco Da Rocha - SP</p>
            </div>

            <div className='dados'>
                <img src={iconPhone} alt="icone do celular" className='icon' />
                <p>(11) 98749-8507</p>
            </div>

            <div className='dados'>
                <img src={iconEmail} alt="icone do email" className='icon' />
                <p>william4fernandes@gmail.com</p>
            </div>

            <div className='dados'>
                <a href="https://www.linkedin.com/in/william-fernandes-4806a0173" target="_blank" rel='noreferrer' >
                <img src={iconLinkedin} alt="icone do linkedin" className='icon' />
                <p>william-fernandes</p>
                </a>
            </div>

            <div className='dados'>
                <a href="https://github.com/will4cod" target="_blank" rel='noreferrer' >
                <img src={iconGitHub} alt="icone do github" className='icon' />
                <p>will4cod</p>
                </a>
            </div>
        </div>
    )
}

export default Contact;