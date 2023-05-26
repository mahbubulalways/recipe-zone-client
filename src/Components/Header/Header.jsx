import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from '../ContextProvider/ContextProvider';


const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const [toggle,setToggle]=useState(false)
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {

            })
    }
    return (
        <div className='bg-black sticky top-0 z-10'>
<div className='w-[80%] mx-auto flex justify-between gap-10 py-4'>
    <h1 className='text-2xl font-semibold text-white '>Recipe<span className='text-yellow-600'>Zone</span></h1>
    
    <div className='hidden lg:block'>
        <div className='flex items-center gap-5 text-lg'>
            <NavLink
                     to="/"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "orange" : "white",
                                };
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink

                            to="/blog"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? "orange" : "white",
                                };
                            }}
                        >
                            Blog
                        </NavLink>
                            <div className='flex items-center gap-5'>
                            <span>    {user && <Link to='profile'><img title={user?.displayName} className='rounded-full w-12 h-12' src={user?.photoURL} alt="" /></Link>}</span>
                            <span>
                                {
                                    user ? <Link><button onClick={handleLogout} className='text-white border border-white px-4 text-lg rounded py-1'>Log out</button></Link>
                                        : <Link to='/login'><button className='text-white border border-white px-4 text-lg rounded py-1'>Log in</button></Link>
                                }
                            </span>
                        </div>

                        
                    </div>
                    
                </div>
                <div className='block lg:hidden cursor-pointer'>
                        <span onClick={()=>setToggle(!toggle)} >
                           {
                            toggle ? <XMarkIcon className="h-9 w-9 text-blue-500" />:<Bars3Icon className="h-9 w-9 text-blue-500" />
                           }
                        </span>
                </div>
            </div>
            <span onClick={() => setToggle(!toggle)}>
                {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute    duration-500 py-10 space-y-5 pr-4  bg-slate-600 lg:hidden sm:block rounded-br-md ${toggle ? 'left-0' : '-left-full'}`} >
                    <Link className='text-white hover:text-black hover:bg-white px-3 py-1 rounded-md' to='/'>Home</Link>
                    <Link className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md' to='/blog'>Blog</Link>
                    <div className='flex flex-col gap-5'>
                            <span>    {user && <img title={user?.displayName} className='rounded-full w-12' src={user?.photoURL} alt="" />}</span>
                            <span>
                                {
                                    user ? <Link><button onClick={handleLogout} className='text-white border border-white px-4 text-lg rounded py-1'>Log out</button></Link>
                                        : <Link to='/login'><button className='text-white border border-white px-4 text-lg rounded py-1'>Log in</button></Link>
                                }
                            </span>
                        </div>
                    
                    
                </div>}
            </span>
        </div>
    );
};

export default Header;