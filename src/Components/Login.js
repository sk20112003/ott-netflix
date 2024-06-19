import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';

const Login = () => {
    const [issignin,setissignin]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
        
       const email=useRef(null);
       const password=useRef(null); 

    const handlebuttonclick =()=>{

      console.log(email.current.value);
      console.log(password.current.value);

      const message=checkValidate(email.current.value,password.current.value);
      setErrorMessage(message);
    
    }
    const togglesignin =()=>{
            setissignin(!issignin)
    }
  return (
    <div >
      <Header/>
      <div className='absolute'> 
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='backimage'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'  >
      <h1 className='font-bold text-2xl py-4 '>{issignin?"Sign In":"Sign Up"}</h1>

      {!issignin && 
        <input type='text'
         placeholder='Full Name'
          className='p-4 my-4 w-full h-10 bg-slate-700'/>}

        <input
        ref={email}
        type='text'
         placeholder='Email Address'
         className='p-4 my-4 w-full h-10 bg-slate-700'/>

        <input
        ref={password}
        type='password'
         placeholder='Password'
          className='p-4 my-4 w-full h-10 bg-slate-700'/>
          <p className='text-red-500'>{errorMessage}</p>



        <button className='px-4 my-4 bg-red-700 w-full h-10 rounded-lg' onClick={handlebuttonclick}>{issignin?"Sign In":"Sign Up"}</button>
        <p className='cursor-pointer' onClick={togglesignin}>{issignin?"New to Netflix? Sign Up Now":"Already a User? Sign In Now"}</p>
      </form>
    </div>
  )
}
export default Login
