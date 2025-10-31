"use client";
import Axios from 'axios';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import  {UserDetailsContext} from '../context/UserDetailsContext';


const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const {user} =  useUser();
    const[userDetails,setUserDetails] = useState<any>(null);
    
    useEffect(() => {
        user&&CreateNewUser();
    }, [user]);

    const  CreateNewUser = async () => {
        const result  = await Axios.post('/api/users');
        console.log(result.data);
        setUserDetails(result.data?.user);
    }
      return (
          <div>
            <UserDetailsContext.Provider value={[userDetails,setUserDetails]}>
            {children}
            </UserDetailsContext.Provider>
            </div>
  )
}


export default Provider;