import React, { useContext } from 'react';
import google from '../../assets/google.png'
import github from '../../assets/git.png'
import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';
const SocialLogin = () => {
  const navigate =useNavigate()
    const {googleUserCreate,githubUserCreate}=useContext(AuthContext)
    const handleGoogle=()=>{
        googleUserCreate()
        .then(()=>{
          navigate('/')
          })
          .catch(error=>{
          
          })
    }
    const handleGithub=()=>{
      githubUserCreate()
      .then(()=>{
        navigate('/')
      })
      .catch(error=>{
        
      })
    }
    return (
        <div className='mt-5'>
           <div onClick={handleGoogle} className='flex items-center gap-1 border-2 w-max px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100'>
           <img className='w-8' src={google} alt="" />
           <p>Continue with google</p>
           </div>
           <div onClick={handleGithub} className='flex items-center gap-1 border-2 w-max px-2 py-1 rounded-md mt-2 cursor-pointer hover:bg-gray-100'>
           <img className='w-8' src={github} alt="" />
           <p>Continue with github</p>
           </div>
        </div>
    );
};

export default SocialLogin;