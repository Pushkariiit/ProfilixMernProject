// import React from 'react';
// import shanya from '../images/shanya.jpeg';

// const About = () => {
//   return (
    // <>
    //   <div className='container emp-profile'>
    //     <form method=''>
    //       <div className='row'>
    //         <div className='col-md-4'>
    //           <div className='profile-img'>
    //             <img src={shanya} alt='profilepic' className='profile-pic' />
    //           </div>

    //           <h5 className='profile-name'>Pushkar Choudhary</h5>
    //           <h6 className='profile-role'>Mern Developer</h6>
    //           <p className='profile-rating'>Ranking: <span>1/10</span></p>



    //           <div className='col-md-2'>
    //             <input type='submit' className='profile-edit-btn' name='btnaddMore' value='Edit Profile' />
    //           </div>
    //         </div>
    //         <div className='col-md-8'>
    //           <div className='profile-head'>
    //             <ul className="nav justify-content-center" role='tablist'>
    //               <li className="nav-item">
    //                 <a className="nav-link active" id="home-tab" data-toggle="tab" aria-current="page" href="#home" role='tab'>About</a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" id="profile-tab" data-toggle="tab" aria-current="page" href="#profile" role='tab'>Profile</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='row'>
    //         <div className='col-md-4'>
    //           <div className='profile-work'>
    //             <p>WORK LINK</p>
    //             <a href='https://www.youtube.com/'>Youtube</a><br />
    //             <a href='https://www.youtube.com/'>Instagram</a><br />
    //             <a href='https://www.youtube.com/'>Linkedin</a><br />
    //             <a href='https://www.youtube.com/'>Twitter</a><br />
    //           </div>
    //         </div>
    //         <div className='col-md-8 pl-5 about-info'>
    //           <div className='tab-content profile-tab' id='myTabContent'>
    //             <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label>User ID</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label>123456789</label>
    //                 </div>
    //               </div>
    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label>Name</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label>Pushkar Choudhary</label>
    //                 </div>
    //               </div>
    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label>User ID</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label>123456789</label>
    //                 </div>
    //               </div>
    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label>User ID</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label>123456789</label>
    //                 </div>
    //               </div>
    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label>User ID</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label>123456789</label>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='tab-pane fade show active' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
    //               <div className='row'>
    //                 <div className='col-md-6'>
    //                   <label >Experice</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label >Expert</label>
    //                 </div>
    //               </div>

    //               <div className='row mt-3'>
    //                 <div className='col-md-6'>
    //                   <label >Salary</label>
    //                 </div>
    //                 <div className='col-md-6'>
    //                   <label >10lakhs</label>
    //                 </div>
    //               </div>

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </>
//   );
// }

// export default About;

// import React, { useState } from 'react';
// import shanya from '../images/shanya.jpeg';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('about');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <div className='container emp-profile'>
//         <form method=''>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-img'>
//                 <img src="" alt='profilepic' className='profile-pic' />
//                 <div className='profile-details'>
//                   <h5 className='profile-name'>Pushkar Choudhary</h5>
//                   <h6 className='profile-role'>Mern Developer</h6>
//                   <p className='profile-rating'>Ranking: <span>1/10</span></p>
//                 </div>
//               </div>
//               <div className='col-md-2'>
//                 <input type='submit' className='profile-edit-btn' name='btnaddMore' value='Edit Profile' />
//               </div>
//             </div>
//             <div className='col-md-8'>
//               <div className='profile-head'>
//                 <ul className="nav justify-content-center" role='tablist'>
//                   <li className="nav-item">
//                     <a
//                       className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('about')}
//                       role='tab'
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('profile')}
//                       role='tab'
//                     >
//                       Profile
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-work'>
//                 <p>WORK LINK</p>
//                 <a href='https://www.youtube.com/'>Youtube</a><br />
//                 <a href='https://www.youtube.com/'>Instagram</a><br />
//                 <a href='https://www.youtube.com/'>Linkedin</a><br />
//                 <a href='https://www.youtube.com/'>Twitter</a><br />
//               </div>
//             </div>
//             <div className='col-md-8 pl-5 about-info'>
//               <div className='tab-content profile-tab' id='myTabContent'>
//                 {activeTab === 'about' && (
//                   <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
//                     <div className='row mt-3'>
//                       <div className='col-md-6'>
//                         <label>User ID</label>
//                       </div>
//                       <div className='col-md-6'>
//                         <label>123456789</label>
//                       </div>
//                     </div>
//                     <div className='row mt-3'>
//                       <div className='col-md-6'>
//                         <label>Name</label>
//                       </div>
//                       <div className='col-md-6'>
//                         <label>Pushkar Choudhary</label>
//                       </div>
//                     </div>
//                     <div className='row mt-3'>
//                       <div className='col-md-6'>
//                         <label>User ID</label>
//                       </div>
//                       <div className='col-md-6'>
//                         <label>123456789</label>
//                       </div>
//                     </div>
//                     <div className='row mt-3'>
//                       <div className='col-md-6'>
//                         <label>User ID</label>
//                       </div>
//                       <div className='col-md-6'>
//                         <label>123456789</label>
//                       </div>
//                     </div>
//                     <div className='row mt-3'>
//                       <div className='col-md-6'>
//                         <label>User ID</label>
//                       </div>
//                       <div className='col-md-6'>
//                         <label>123456789</label>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {activeTab === 'profile' && (
                  // <div className='tab-pane fade show active' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  //   <div className='row'>
                  //     <div className='col-md-6'>
                  //       <label >Experice</label>
                  //     </div>
                  //     <div className='col-md-6'>
                  //       <label >Expert</label>
                  //     </div>
                  //   </div>

                  //   <div className='row mt-3'>
                  //     <div className='col-md-6'>
                  //       <label >Salary</label>
                  //     </div>
                  //     <div className='col-md-6'>
                  //       <label >10lakhs</label>
                  //     </div>
                  //   </div>

                  // </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default About;


// import React, { useState } from 'react';
// import shanya from '../images/shanya.jpeg';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('about');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <div className='container emp-profile'>
//         <form method=''>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-img'>
//                 <img src={shanya} alt='profilepic' className='profile-pic' />
//               </div>

//               <h5 className='profile-name'>Shanya </h5>
//               <h6 className='profile-role'>Medico</h6>
//               <p className='profile-rating'>Ranking: <span>7.5/10</span></p>

//               <div className='col-md-2'>
//                 <input type='submit' className='profile-edit-btn' name='btnaddMore' value='Edit Profile' />
//               </div>
//             </div>
//             <div className='col-md-8'>
//               <div className='profile-head'>
//                 <ul className="nav justify-content-center" role='tablist'>
//                   <li className="nav-item">
//                     <button
//                       className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('about')}
//                     >
//                       About
//                     </button>
//                   </li>
//                   <li className="nav-item">
//                     <button
//                       className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
//                       onClick={() => handleTabChange('profile')}
//                     >
//                       Profile
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-work'>
//                 <p>WORK LINK</p>
//                 <a href='https://www.youtube.com/'>Youtube</a><br />
//                 <a href='https://www.youtube.com/'>Instagram</a><br />
//                 <a href='https://www.youtube.com/'>Linkedin</a><br />
//                 <a href='https://www.youtube.com/'>Twitter</a><br />
//               </div>
//             </div>
//             <div className='col-md-8 pl-5 about-info'>
//               <div className='tab-content profile-tab' id='myTabContent'>
//                 <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} id='about' role='tabpanel' aria-labelledby='about-tab'>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>User ID</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>123456789</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>Name</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>Shanya</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>Age</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>20</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>Marital status</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>Single</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>Salary</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>1lakh/month</label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id='profile' role='tabpanel' aria-labelledby='profile-tab'>
//                   <div className='row'>
//                     <div className='col-md-6'>
//                       <label >Experience</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label >Expert</label>
//                     </div>
//                   </div>

//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label >Salar</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label >10 lakhs</label>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default About;
// import React, { useState } from 'react';
// import shanya from '../images/shanya.jpeg';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('about');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <>
//       <div className='container emp-profile'>
//         <div className='row'>
//           <div className='col-md-4'>
//             <div className='profile-img'>
//               <img src={shanya} alt='profilepic' className='profile-pic' />
//             </div>

//             <h5 className='profile-name'>Shanya</h5>
//             <h6 className='profile-role'>Medico</h6>
//             <p className='profile-rating'>
//               Ranking: <span>7.5/10</span>
//             </p>

//             <div className='col-md-2'>
//               <input
//                 type='submit'
//                 className='profile-edit-btn'
//                 name='btnaddMore'
//                 value='Edit Profile'
//               />
//             </div>
//           </div>
//           <div className='col-md-8'>
//             <div className='profile-head'>
//               <ul className='nav justify-content-center' role='tablist'>
//                 <li className='nav-item'>
//                   <button
//                     className={`nav-link ${
//                       activeTab === 'about' ? 'active' : ''
//                     }`}
//                     onClick={() => handleTabChange('about')}
//                   >
//                     About
//                   </button>
//                 </li>
//                 <li className='nav-item'>
//                   <button
//                     className={`nav-link ${
//                       activeTab === 'profile' ? 'active' : ''
//                     }`}
//                     onClick={() => handleTabChange('profile')}
//                   >
//                     Profile
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-4'>
//             <div className='profile-work'>
//               <p>WORK LINK</p>
//               <a href='https://www.youtube.com/'>Youtube</a>
//               <br />
//               <a href='https://www.youtube.com/'>Instagram</a>
//               <br />
//               <a href='https://www.youtube.com/'>Linkedin</a>
//               <br />
//               <a href='https://www.youtube.com/'>Twitter</a>
//               <br />
//             </div>
//           </div>
//           <div className='col-md-8 pl-5 about-info'>
//             <div
//               className='tab-content profile-tab'
//               id='myTabContent'
//             >
//               <div
//                 className={`tab-pane fade ${
//                   activeTab === 'about' ? 'show active' : ''
//                 }`}
//                 id='about'
//                 role='tabpanel'
//                 aria-labelledby='about-tab'
//               >
//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>User ID</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>123456789</label>
//                   </div>
//                 </div>
//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>Name</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>Shanya</label>
//                   </div>
//                 </div>
//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>Age</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>20</label>
//                   </div>
//                 </div>
//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>Marital status</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>Single</label>
//                   </div>
//                 </div>
//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>Salary</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>1lakh/month</label>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className={`tab-pane fade ${
//                   activeTab === 'profile' ? 'show active' : ''
//                 }`}
//                 id='profile'
//                 role='tabpanel'
//                 aria-labelledby='profile-tab'
//               >
//                 <div className='row'>
//                   <div className='col-md-6'>
//                     <label>Experience</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>Expert</label>
//                   </div>
//                 </div>

//                 <div className='row mt-3'>
//                   <div className='col-md-6'>
//                     <label>speciallity</label>
//                   </div>
//                   <div className='col-md-6'>
//                     <label>Fighting with boyfrnd</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


// import React, { useEffect, useState } from 'react';
// import shanya from '../images/shanya.jpeg';
// import { useNavigate } from 'react-router-dom';

// const About = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('about');
//   const [userData,setUserData] = useState();

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const callAboutPage = async()=>{
//     try{

//       const res = await fetch('/about',{
//         method:"GET",
//         headers:{
//           Accept :"application/json",
//           "Content-Type":"application/json"
//         },
//         credentials:'include'
//       });

//       const data = await res.json();
//       console.log(data);
//       setUserData(data);
      
//       if(res.status!==201){
//         const error = new Error(res.error);
//         throw error;
//       }

//     }catch(err){
//       console.log(err);
//       navigate('/login');
//     }
//   }

//   useEffect(()=>{
//     callAboutPage();
//   },[]);

//   return (
//     <div className='container emp-profile'>
//     <form method='GET'>
//       <div className='row'>
//         <div className='col-md-4'>
//           <div className='profile-img'>
//             <img src={shanya} alt='profilepic' className='profile-pic' />
//           </div>

//           <h5 className='profile-name'>{userData.name}</h5>
//           <h6 className='profile-role'>Medico</h6>
//           <p className='profile-rating'>
//             Ranking: <span>7.5/10</span>
//           </p>

//           <div className='text-center mt-3'>
//             <input
//               type='submit'
//               className='profile-edit-btn btn btn-primary'
//               name='btnaddMore'
//               value='Edit Profile'
//             />
//           </div>
//         </div>

//         <div className='col-md-8'>
//           <div className='profile-head'>
//             <ul className='nav nav-tabs justify-content-center' role='tablist'>
//               <li className='nav-item'>
//                 <button
//                   className={`nav-link ${
//                     activeTab === 'about' ? 'active' : ''
//                   }`}
//                   onClick={() => handleTabChange('about')}
//                 >
//                   About
//                 </button>
//               </li>
//               <li className='nav-item'>
//                 <button
//                   className={`nav-link ${
//                     activeTab === 'profile' ? 'active' : ''
//                   }`}
//                   onClick={() => handleTabChange('profile')}
//                 >
//                   Profile
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div className='tab-content' id='myTabContent'>
//             <div
//               className={`tab-pane fade ${
//                 activeTab === 'about' ? 'show active' : ''
//               }`}
//               id='about'
//               role='tabpanel'
//               aria-labelledby='about-tab'
//             >
//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>User ID</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>123456789</label>
//                 </div>
//               </div>
//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>Name</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>Shanya</label>
//                 </div>
//               </div>
//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>Age</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>20</label>
//                 </div>
//               </div>
//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>Marital status</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>Single</label>
//                 </div>
//               </div>
//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>Salary</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>1lakh/month</label>
//                 </div>
//               </div>
//             </div>

//             <div
//               className={`tab-pane fade ${
//                 activeTab === 'profile' ? 'show active' : ''
//               }`}
//               id='profile'
//               role='tabpanel'
//               aria-labelledby='profile-tab'
//             >
//               <div className='row'>
//                 <div className='col-sm-6'>
//                   <label>Experience</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>Expert</label>
//                 </div>
//               </div>

//               <div className='row mt-3'>
//                 <div className='col-sm-6'>
//                   <label>Specialty</label>
//                 </div>
//                 <div className='col-sm-6'>
//                   <label>Fighting with boyfriend</label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='row'>
//         <div className='col-md-4'>
//         <div className='col-md-4 profile-work' style={{ paddingLeft: '40px' }}>
//             <p>WORK LINK</p>
//             <a href='https://www.youtube.com/'>Youtube</a>
//             <br />
//             <a href='https://www.youtube.com/'>Instagram</a>
//             <br />
//             <a href='https://www.youtube.com/'>Linkedin</a>
//             <br />
//             <a href='https://www.youtube.com/'>Twitter</a>
//             <br />
//           </div>
//         </div>
//         {/* <div className='col-md-8 about-info'>
          
//         </div> */}
//       </div>
//       </form>
//     </div>
//   );
// };

// export default About;


// import React, { useEffect, useState } from 'react';
// import shanya from '../images/shanya.jpeg';
// import { useNavigate } from 'react-router-dom';

// const About = () => {
//   const navigate = useNavigate();
//   const [userData,setUserData] = useState({});

 

//   const callAboutPage = async () => {
//     try {
//       const res = await fetch('/about', {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//       });
  
//       if (res.status === 200) {
//         const data = await res.json();
//         console.log(data);
//         setUserData(data);
//       } else if (res.status === 401) {
//         throw new Error('Unauthorized');
//       } else {
//         throw new Error('Something went wrong');
//       }
//     } catch (err) {
//       console.log(err);
//       navigate('/login');
//     }
//   };
  
//   useEffect(()=>{
//     callAboutPage();
//   },[]);

//   return (
//     <>
//       <div className='container emp-profile'>
//         <form method='GET'>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-img'>
//                 <img src={shanya} alt='profilepic' className='profile-pic' />
//               </div>

//               <h5 className='profile-name'>{userData.name}</h5>
//               <h6 className='profile-role'>Mern Developer</h6>
//               <p className='profile-rating'>Ranking: <span>1/10</span></p>



//               <div className='col-md-2'>
//                 <input type='submit' className='profile-edit-btn' name='btnaddMore' value='Edit Profile' />
//               </div>
//             </div>
//             <div className='col-md-8'>
//               <div className='profile-head'>
//                 <ul className="nav justify-content-center" role='tablist'>
//                   <li className="nav-item">
//                     <a className="nav-link active" id="home-tab" data-toggle="tab" aria-current="page" href="#home" role='tab'>About</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" id="profile-tab" data-toggle="tab" aria-current="page" href="#profile" role='tab'>Profile</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-md-4'>
//               <div className='profile-work'>
//                 <p>WORK LINK</p>
//                 <a href='https://www.youtube.com/'>Youtube</a><br />
//                 <a href='https://www.youtube.com/'>Instagram</a><br />
//                 <a href='https://www.youtube.com/'>Linkedin</a><br />
//                 <a href='https://www.youtube.com/'>Twitter</a><br />
//               </div>
//             </div>
//             <div className='col-md-8 pl-5 about-info'>
//               <div className='tab-content profile-tab' id='myTabContent'>
//                 <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>User ID</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>123456789</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>Name</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>Pushkar Choudhary</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>User ID</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>123456789</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>User ID</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>123456789</label>
//                     </div>
//                   </div>
//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label>User ID</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label>123456789</label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='tab-pane fade show active' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
//                   <div className='row'>
//                     <div className='col-md-6'>
//                       <label >Experice</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label >Expert</label>
//                     </div>
//                   </div>

//                   <div className='row mt-3'>
//                     <div className='col-md-6'>
//                       <label >Salary</label>
//                     </div>
//                     <div className='col-md-6'>
//                       <label >10lakhs</label>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default About;


import React, { useEffect, useState } from 'react';
import noPic from '../images/noPic.png';
import purvesh from '../images/purvesh.png';
import { useNavigate } from 'react-router-dom';
import useRefreshLogout from './useRefreshLogout';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setUserData(data);
      } else if (res.status === 401) {
        throw new Error('Unauthorized');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    callAboutPage();
    
  }, []);

  useRefreshLogout();

  return (
    <>
      <div className="container emp-profile">
  <form method="GET">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img src={userData.name==="Purvesh Patil" ? purvesh : noPic} alt="profilepic" className="profile-pic" />
        </div>
        <h5 className="profile-name">{userData.name}</h5>
        <h6 className="profile-role">{userData.work}</h6>
        <p className="profile-rating">
          Ranking: <span>1/10</span>
        </p>
        <div className="col-md-2">
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnaddMore"
            value="Edit Profile"
          />
        </div>
      </div>
      <div className="col-md-8">
        <div className="profile-head">
          <ul className="nav justify-content-between" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'about' ? 'active' : ''
                }`}
                onClick={() => handleTabChange('about')}
                role="tab"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'profile' ? 'active' : ''
                }`}
                onClick={() => handleTabChange('profile')}
                role="tab"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 'socialsites' ? 'active' : ''
                }`}
                onClick={() => handleTabChange('socialsites')}
                role="tab"
              >
                socialsites
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content profile-tab" id="myTabContent">
          {activeTab === 'about' && (
            <div
              className={`tab-pane fade ${
                activeTab === 'about' ? 'show active' : ''
              }`}
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              {/* <div className="row mt-3">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <label>{userData.phone}</label>
                </div>
              </div> */}
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <label>{userData.name}</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <label>{userData.email}</label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <label>{userData.phone}</label>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Profession</label>
                </div>
                <div className="col-md-6">
                  <label>{userData.work}</label>
                </div>
              </div>
             
            </div>

            
          )}
          {activeTab === 'profile' && (
            <div
              className={`tab-pane fade ${
                activeTab === 'profile' ? 'show active' : ''
              }`}
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Experience</label>
                </div>
                <div className="col-md-6">
                  <label>Expert</label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Salary</label>
                </div>
                <div className="col-md-6">
                  <label>10 lakhs</label>
                </div>
              </div>
              {/* Add more profile information here */}
            </div>
          )}
          {activeTab === 'socialsites' && (
            <div
              className={`tab-pane fade ${
                activeTab === 'socialsites' ? 'show active' : ''
              }`}
              id="socialsites"
              role="tabpanel"
              aria-labelledby="socialsites-tab"
            >
              <div className="profile-socialsites">
                
                <ul>
                <a href="https://www.youtube.com/">Youtube</a>
                <br />
                <a href="https://www.youtube.com/">Instagram</a>
                <br />
                <a href="https://www.youtube.com/">Linkedin</a>
                <br />
                <a href="https://www.youtube.com/">Twitter</a>
                <br />
                </ul>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </form>
</div>
</>
  )

            }

export default About;
