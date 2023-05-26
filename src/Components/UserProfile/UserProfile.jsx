import React, { useContext, useState } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import moment from 'moment';
const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const [update,setUpdate]=useState(false)
    const handleProfileUpdate=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const imgUrl =form.imgUrl.value
        user.displayName=name
        user.photoURL=imgUrl
    }
    
    
    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='text-2xl font-serif text-center mb-8'>Here is your Profile information</h1>
            <div className='border-2 w-max rounded-md px-6 py-10 shadow-2xl mx-auto '>
                <img src={user?.photoURL} className='w-36 h-36 rounded-full mx-auto' alt="" />
                <h1 className='text-2xl mt-5 font-semibold text-center'>{user?.displayName}</h1>
                <p>Email: {user?.email}</p>
                <p>Creation Time: {moment(user?.metadata?.creationTime).format('MMMM D YYYY, h:mm: a')}</p>
                <button onClick={()=>setUpdate(!update)} className='bg-red-600 px-4 py-1 rounded-2xl text-white mt-5'>
                <label htmlFor="my-modal" className='cursor-pointer text-lg'>update</label>
                </button>
                
                
               <div>
                  
                  </div>
            </div>
        { update &&  <div>
                    
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                      <form onSubmit={handleProfileUpdate} action="">
                        <p className='text-lg'>Name</p>
                    <input type="text"  name="name" id="" placeholder='name' className='border-2 rounded-md px-3 py-1  border-green-700 outline-none w-full  ' required/>
                    <p className='text-lg mt-4'>Image Url</p>
                    <input type="text" name='imgUrl' className='border-2 rounded-md px-3 py-1  border-green-700 outline-none w-full ' placeholder='img url'/>
                    <button className='mt-3 bg-blue-600 text-white px-3 py-1 rounded-md'>Submit</button>
                    </form>
                        <div className="modal-action">
                          <button onClick={()=>setUpdate(false)}><label htmlFor="my-modal" className="btn">Close</label></button>
                        </div>
                      </div>
                    </div>
                                    </div>}
        </div>
    );
};

export default UserProfile;