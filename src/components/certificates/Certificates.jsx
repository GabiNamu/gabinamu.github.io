import React from 'react';
import './certificates.css';
import fundamentos from '../../images/fundamentos.png'
import front from '../../images/front.png'
import tests from '../../images/tests.png';

const Certificates = () => {
  return (
    <div className='certificate-conteiner' id='certificates'>
        <h3 className='certificate-title'>Certificates</h3>
        <div className='certificate-content'>
        <a href="https://www.credential.net/8de99712-40ba-4500-b66e-3037d2ac350c#gs.uk9au3"
        target="_blank" rel="noopener noreferrer">
        <img src={fundamentos} alt="certificado de fundamentos" className='certificate'/>
        </a>
        <a href="https://www.credential.net/b6e3f0a8-78e6-4987-a4dd-654865bd793b#gs.uk9egj"
        target="_blank" rel="noopener noreferrer">
        <img src={front} alt="certificado de front-end" className='certificate' />
        </a>
        <a href="https://www.linkedin.com/learning/certificates/e847fa8160488a0b591727d506d14c97e56684ef00144db448ff2f14d1c3eac6"
        target="_blank" rel="noopener noreferrer">
        <img src={tests} alt="Linkedin Certificate" className='certificate'/>
        </a>
        </div>
    </div>
  )
}

export default Certificates