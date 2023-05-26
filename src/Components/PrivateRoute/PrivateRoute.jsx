import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div className='flex justify-center h-60 items-center'>
            <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  
};

export default PrivateRoute;