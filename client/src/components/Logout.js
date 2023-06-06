import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../App';

const Logout = () => {

    const {state,dispatch} = useContext(userContext);

    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout',{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
        
    }).then((res)=>{
        dispatch({type:"USER",payload:false});
        navigate('/login',{replace:true});
        if(res.status!==200){
            const error = new Error(res.error);
            throw error;
        }
    })

})
  return (
    <>

    </>
  )
}

export default Logout
