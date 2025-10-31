"use client";
import Axios from 'axios';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import  {UserDetailsContext} from '../app/context/UserDetailsContext';


const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const {user} =  useUser();
    const[userDetails,setUserDetails] = React.useState<any>(null);
    
    useEffect(() => {
        user&&CreateNewUser();
    }, [user]);

    const  CreateNewUser = async () => {
        const result  = await Axios.post('/api/users');
        console.log(result.data);
    }
      return (
          <div>
            <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>
            {children}
            </UserDetailsContext.Provider>
            </div>
  )
}


export default Provider;