import React,{useState} from 'react';
import "../Components/style.css";
import {useNavigate} from 'react-router-dom';

const Right = () => {

  const navigate = useNavigate();

  const navigateToContrats = () => {
    navigate('/Congratulation');
  };

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [Contact, setContact] = useState()
  const [gender, setGender] = useState()
  
  const Reset=() => {
    setName("")
    setContact("")
    setAddress("")
    setEmail("")
    setGender("")
  }

  return (
    <div className='right'>
        <div className='formcontainer'>
        <div className='formWrapper'>
            <span className="vitTrendZ">VITrendZ</span>
            <form >
                <input type="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='Contact Number'value={Contact} onChange={(e) => setContact(e.target.value)} />
                <input type="email" placeholder='Vit-Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)}/>
                <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}  />
            </form>
            </div>
        </div>
        <button className='btn-send' onClick={Reset} > Send Form</button>
        <button className='btn-submit' onClick={navigateToContrats}>Submit</button>
    </div>
  )
}

export default Right



