import React from 'react'
import call from '../images/call.png';
import email from '../images/email.png';
import address from '../images/address.png';
import { useState, useEffect } from 'react';
import useRefreshLogout from './useRefreshLogout';

const Contact = () => {

  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
  });

  const userContact = async () => {
    try {

      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone});

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  }, []);


  const handleInputs =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserData({...userData,[name]:value})
  }

const contactform= async(e)=>{
  e.preventDefault();

  const {name,email,phone,message} = userData;

  const res = await fetch ('/contact',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,phone,message})
  });

  const data = await res.json();

  if(!data){
    console.log("message not ssend");
  }
  else{
    alert("successfully");
    setUserData({...userData,message:""});
  }
  
}
useRefreshLogout();



  return (
    <>


      <div className='contact_info'>
        <div className='container_fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 justify-content-between'>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <div className='contact_info_box'>
                  <img src={call} alt="phone" />
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Phone
                    </div>
                    <div className='contact_info_text'>
                      9487519325
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <div className='contact_info_box'>
                  <img src={email} alt="email" />
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Email
                    </div>
                    <div className='contact_info_text'>
                      pushkar@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <div className='contact_info_box'>
                  <img src={address} alt="address" />
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Address
                    </div>
                    <div className='contact_info_text'>
                      GandhiNagar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='contactus'>
        <div className='container mt-5'>
          <div className='contactus-content'>
            <h2 className='form-title'><strong>Contact Us</strong></h2> <br />
            <div className='contactus-form'>
              <form method = "POST" className='contactus-form' id='contact_form'>
                <div className="mb-3">
                  <label for="name" className="form-label"><i class="zmdi zmdi-account"></i></label>
                  <div className="input-container">
                    <input type="text" className="form-control" name="name" id="name" aria-describedby="name" onChange={handleInputs} value ={userData.name} placeholder='Your Name' />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label"><i class="zmdi zmdi-email"></i></label>
                  <div className="input-container">
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" onChange={handleInputs} value ={userData.email} placeholder='Email address' />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label"><i class="zmdi zmdi-phone"></i></label>
                  <div className="input-container">
                    <input type="number" className="form-control" name="phone" id="phone" aria-describedby="phone" onChange={handleInputs} value ={userData.phone} placeholder='Phone Number' />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label"><i class="zmdi zmdi-email"></i></label>
                  <textarea className="form-control" name="message" id="message" aria-describedby="message" onChange={handleInputs} value ={userData.message} placeholder='Write your message'></textarea>
                </div>
                <button type="submit" className="btn btn-primary" name='contactus' id='contactus' onClick={contactform}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
