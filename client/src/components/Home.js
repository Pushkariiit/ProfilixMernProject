// import React from 'react'
// const Home = () => {
//   return (
//     <>
    // <div className='home-page'>
    //   <div className='home-div'>
    //   <p className='pt-5'>
    //   Welcome
    //   </p>
    //   <h1>We are MERN Developers</h1>
    //   </div>
    // </div>
//     </>
//   )
// }

// export default Home
import React from 'react';
import g1 from '../images/g1.png';
import g2 from '../images/g2.png';
import g3 from '../images/g3.png';
import { useState,useEffect } from 'react';


  const Home = () => {

    const [username, setUserName] = useState();
    const [show,setShow] = useState(false);
  
    const userHomePage = async () => {
      try {
  
        const res = await fetch('/getdata', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
  
        const data = await res.json();
        console.log(data);
        setUserName(data.name);
        setShow(true);
  
      } catch (err) {
        console.log(err);
      }
    }
  
    useEffect(() => {
      userHomePage();
    }, []);
  
  return (
    <>
    <div className='home-page'>
      <div className='home-div'>
      <p className='pt-5'>
      Good Wishes
      </p>
      <h1>{username}</h1>
      <h2>{show ? "Happy to See You Back" : "Welcome to our Company"}</h2>
      </div>
    
    <div className="home-container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={g1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>Office of Google</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={g2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>Wonderful Interior</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={g3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>Discussion Area of Google</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
