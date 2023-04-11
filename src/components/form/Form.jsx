import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';
import './form.css';

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Form = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        description: '',
    })
    const [send, setSend] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fwoabmo', 'template_v4o1iyi', form.current, 'OwtPYLV_qUJ58F_AK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setState({
            name: '',
            email: '',
            description: '',
           })
          setSend(true);
      };

    const handleChange = ({target}) => {
       setState({
        ...state,
        [target.name]: target.value,
       })
       setSend(false)
    }

  return (
    <form ref={ form } onSubmit={ sendEmail } className='form-container'>
        <h3 className='form-title'>Send me a message</h3>
        <input type="text" name="name" value={ state.name } 
        onChange={ handleChange} className='form-input' placeholder='Your Full Name'/>
        <input type="email" name="email" id="" value={ state.email } 
        onChange={ handleChange} className='form-input' placeholder='Your email'/>
        <textarea 
        name="description" 
        className='form-textarea'
        placeholder='Write some message...'
        id="" cols="30" 
        rows="10" value={ state.description }
        onChange={ handleChange} 
        ></textarea>
        {send && <p>Message send!</p>}
        <button 
        type='submit' 
        className='form-button'
        disabled={!state.name || !state.email || !state.description || !regex.test(state.email)}
        >Send</button>
    </form>
  )
}

export default Form