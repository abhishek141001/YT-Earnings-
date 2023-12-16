import React, { useState,useRef } from 'react'
import emailjs from "emailjs-com"

function PopUpForm({open,onClose}) {

  const [name,setName] = useState("");
  const [number,setNumber] = useState("")
  const [submit,setSubmit] = useState(false)
  const form = useRef();

const handleSubmit = (e)=>{
    e.preventDefault();
   
    const serviceId = "service_pvoqv4j"
    const templetId = "template_0ugi4td"
    const userId = "B8qwxXBt4WOb3FnrY"
    const templetParams = {
        name:name,
        contact: number
    } 

    emailjs.sendForm(serviceId, templetId, form.current, userId)
    .then(() => {
        setName("")
        setNumber("")
        setSubmit(true)
        form.current.reset();
       return<div>our tem will contact you soon</div> //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
}


    if(!open) return null;
    
  else return (
<>
<div className='overlayStyles'/>

    <div className='popUpForm'>
    <img onClick={onClose} className='cross' src='/img/cross.png'/>
    {submit? <div className='submited'>
        <img className='tick' src='/img/tick.png'/>
        <p className='requestedCall'>Requsted a call back</p>
        <p className='requestedCallBottom'>Our Team will call you shortly in 
        12-24 hrs</p>
        
        </div>:<form className='mainForm' ref={form} onSubmit={handleSubmit}>
    <input className='contactInput' placeholder='Name' name='name' value={name} type='text' onChange={(e)=>{setName(e.target.value)}} />
   <input className='contactInput' placeholder='Email or Phone number' value={number} name='contact' type='text' onChange={(e)=>{setNumber(e.target.value)}}/>
   <button className='contactSubmit'>Request a call back</button>
   </form>} 
    
    
    </div>
    </>
  )
}

export default PopUpForm
