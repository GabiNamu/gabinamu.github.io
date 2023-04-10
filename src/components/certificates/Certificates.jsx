import React from 'react';
import './certificates.css';
import fundamentos from '../../images/fundamentos.png'
import front from '../../images/front.png'

const Certificates = () => {
  return (
    <div className='certificate-conteiner' id='certificates'>
        <h3 className='certificate-title'>Certificates</h3>
        <div className='certificate-content'>
        <a href="https://www.credential.net/80affd06-fefa-40d1-a154-ee8f7f792753#gs.uxcwju">
        <img src={fundamentos} alt="certificado de fundamentos" className='certificate'/>
        </a>
        <a href="https://www.credential.net/ba6fc10f-ebb5-4413-8c0e-c6fee4e630bf">
        <img src={front} alt="certificado de front-end" className='certificate' />
        </a>
        </div>
    </div>
  )
}

export default Certificates