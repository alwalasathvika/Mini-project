import React from 'react'
import { BASE_URL } from '../config.js';
import { useState ,useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {authContext} from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [formData, setformData]=useState({
    email:"",
    password:""
  })
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {dispatch}=useContext(authContext);
  const handleInputChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value});

  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      console.log('Response status:', res.status); // Log status
      const result = await res.json();
      console.log('Result:', result); // Log result
  
      if (!res.ok) {
        throw new Error(result.message || 'Login failed');
      }
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });
      toast.success(result.message);
      navigate('/home');
    } catch (err) {
      toast.error(err.message || "Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };
  
  
  return <section className='px-5 lg:px-0'>
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-headingColor text-[22px] leding-9 font-bold mb-10">Hello!
        <span className='text-primaryColor '>Welcome </span>Back 🎉🎉</h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input type='email' placeholder='Enter your Email' name='email' value={formData.email} onChange={handleInputChange} className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:oultine-none 
            focus-border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required />
          
    </div>
    <div className='mb-5'>
            <input type='password' placeholder='password' name='password' value={formData.password} onChange={handleInputChange} className='w-full py-3 border-b border-solid border-[#0066ff61] focus:oultine-none 
            focus-border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required />
          
      </div>    <div className='mt-7'>
            <button type='submit'  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg'>
              {loading ? <HashLoader size={25} color="#fff" /> : 'Login'}
              </button>
          </div>
          <p className='mt-5 text-textColor text-center'>
            Donot have an account?<Link  to='/register' className='text-primaryColor font-medium ml-1'>
            Register</Link>
            
          </p> 
        </form>

    </div>
    
  </section>
}

export default Login