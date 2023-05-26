import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';
import Swal from 'sweetalert2';
import { ColorRing } from 'react-loader-spinner';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const[showPass ,setShowPass]=useState(false)
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const handleRegister=(event)=>{
      event.preventDefault()
      const form=event.target
      const name=form.name.value
      const imgUrl=form.imgUrl.value
      const email=form.email.value
      const password=form.password.value
      if(password.length<6){
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Please enter a valid password',
            
          })
          return
    }
  
    setLoading(true)

    setError('')
      createUser(email,password)
      .then(async result=>{
       await updateUserProfile(result.user,name,imgUrl)
       setLoading(false)
       window.location.assign("/");
      })
      .catch(error=>{
        setError(error.message);
        setLoading(false)
      })

      
    }
    return (
        <div className='w-[80%] mx-auto'>

            <div className='   my-24  shadow-xl rounded border-max p-8 '>
                <p className='text-4xl text-center'>Create an Account</p>
            <form onSubmit={handleRegister} action="" className='space--2 mt-10 '>
                <p className='text-lg'>Name</p>
                <input type="text"  name="name" id="" placeholder='name' className='border-2 rounded-md px-3 py-1  border-green-700 outline-none w-full lg:w-1/3 ' required/>
                <p className='text-lg mt-4'>Image Url</p>
                <input type="text" name='imgUrl' className='border-2 rounded-md px-3 py-1  border-green-700 outline-none w-full lg:w-1/3 ' placeholder='img url'/>
                <p className='text-lg mt-4'>Email</p>
                <input type="email"  name="email" id="" placeholder='email' className='border-2 rounded-md px-3 py-1  border-green-700 outline-none w-full lg:w-1/3 'required/>
                <p className='text-lg mt-4'>Password</p>
                <p className='text-blue-600 text-xs'>Password should must  six characters.</p>
                <input type={showPass ? 'text' : 'password'}  name="password" id="" placeholder='password' className='border-2 rounded-md px-3 py-1 border-green-700 outline-none w-full lg:w-1/3 mt-1'required/>
             
              <div className='mt-2' onClick={()=>setShowPass(!showPass)}>
               {showPass ?<p  className='text-blue-500 cursor-pointer w-max'>Hide Password</p>:<p  className='text-blue-500 cursor-pointer w-max'>Show Password</p>}
               </div>
               
             <div>
                <p className='text-red-600'>{error}</p>
             </div>

            
            
       

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
                
                Register</button>
               
            </form>
            <SocialLogin></SocialLogin>
            <p className='mt-5'>Already have an account please <Link className='text-blue-500' to='/login'>Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;