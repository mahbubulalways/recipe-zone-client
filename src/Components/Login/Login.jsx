import React, { useContext, useState } from 'react';
import { Link,  useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ColorRing } from 'react-loader-spinner';

const Login = () => {
    const[showPass ,setShowPass]=useState(false)
    const {signInUser}=useContext(AuthContext)
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    const location=useLocation()
    const  from = location.state?.from?.pathname || "/";
    const handleSignIn=(event)=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        setError('')
        setLoading(true)
        signInUser(email,password)
        .then(result=>{
            navigate('/')
            navigate(from, { replace: true });
            setLoading(false)
          })
          .catch(error=>{
            setError(error.message);
            setLoading(false)
          })
    }
    return (
        <div className='w-[80%] mx-auto'>
            <div className=' my-24  shadow-xl rounded border-max p-8 '>
                <p className='text-4xl text-center'>Log in your Account</p>
            <form onSubmit={handleSignIn} action="" className='space--2 mt-10'>
                <p className='text-lg'>Email</p>
                <input type="email"  name="email" id="" placeholder='email' className='border-b-2 px-3 py-1  border-green-700 outline-none  w-full lg:w-1/3 'required/>
                <p className='text-lg mt-4'>Password</p>
                <input type={showPass ? 'text' : 'password'}  name="password" id="" placeholder='password' className='border-b-2 px-3 py-1 border-green-700 outline-none w-full lg:w-1/3 ' required/>
              <div  className='flex gap-10 mt-2'>
              <div className='' onClick={()=>setShowPass(!showPass)}>
               {showPass ?<p  className='text-blue-500 cursor-pointer'>Hide Password</p>:<p  className='text-blue-500 cursor-pointer'>Show Password</p>}
               </div>
               <p className='text-blue-500 '>Forget your password</p>
              </div>
              <p className='text-red-600'>{error}</p>
              <button disabled={loading}  className='cursor-pointer bg-green-600 text-white px-5 py-2 rounded-md mt-3 flex items-center'>
              {
                loading &&  <ColorRing
                visible={true}
                height="30"
                width="30"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
              />
              }
                
                Log in</button>

             
            </form>
            <SocialLogin></SocialLogin>
            <p className='mt-5'>Dont have an account please <Link className='text-blue-500' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;