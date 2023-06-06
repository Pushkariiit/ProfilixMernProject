import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signpic from '../images/signup.png';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  // let name,value;

  // const InputEvent=(e)=>{
  //   console.log(e);
  //   const name = e.target.name;
  //   value= e.target.value;

  //   setUser({...user,[name]:value});

  // }

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // alert(`My name is : ${data.fullname}  My phone no is : ${data.phone} My email is : ${data.email}  My Feedback is : ${data.msg}`);

  }

  const PostData = async (e) => {
    e.preventDefault();
    console.log('PostData function called');

    const { name, email, phone, work, password, cpassword } = user;
    console.log('Sending registration request');
    if (name && email && phone && work &&password && cpassword) {

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        })
      });
      const data = await res.json();

      if (data||data.status!==422) {
        setUser({
          name: "",
          email: "",
          phone: "",
          work: "",
          password: "",
          cpassword: "",
        })
      } alert("Successfull");
      navigate('/login');
    }
      else {
        alert("Invalid registration");
      }

      
}

return (<>
  <section className='signup'>
    <div className='container mt-5'>
      <div className='signup-content'>
        <div className='signup-form'>

          <h2 className='form-title'><strong>Sign Up</strong></h2>

          <form onSubmit={formSubmit} method="POST" className='register-form' id='register-form'>
            <div className="mb-3">
              <label htmlfor="name" className="form-label"><i className="zmdi zmdi-account"></i></label>
              <input type="text" name="name" className="form-control" id="name" aria-describedby="name" placeholder='Your Name'
                value={user.name}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="email" className="form-label"><i className="zmdi zmdi-email"></i></label>
              <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email address'
                value={user.email}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="phone" className="form-label"><i className="zmdi zmdi-phone-in-talk"></i> </label>
              <input type="number" name="phone" className="form-control" id="phone" aria-describedby="phone" placeholder='Phone Number'
                value={user.phone}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="prof" className="form-label"><i className="zmdi zmdi-slideshow"></i></label>
              <input type="text" name="work" className="form-control" id="prof" aria-describedby="prof" placeholder='Your Profession'
                value={user.work}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="password" className="form-label"><i className="zmdi zmdi-lock"></i></label>
              <input type="password" name="password" className="form-control" id="password" aria-describedby="password" placeholder='PassWord'
                value={user.password}
                onChange={InputEvent}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="cpassword" className="form-label"><i className="zmdi zmdi-lock"></i></label>
              <input type="password" name="cpassword" className="form-control" id="cpassword" aria-describedby="cpassword" placeholder='Confirm Your PassWord'
                value={user.cpassword}
                onChange={InputEvent}
              />
            </div>
            <button type="submit" className="btn btn-primary" name='signup' id='signup' onClick={PostData}>Register</button>
          </form>
        </div>
        <div className='signup-image'>
          <figure>
            <img src={signpic} alt='signpic'></img>
          </figure>
          <NavLink to='/login' className='signup-img-link'>I am Already Registered</NavLink>


        </div>

      </div>
    </div>
  </section>
</>
)
}

export default Signup;
