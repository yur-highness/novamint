"use client";
import Axios from 'axios';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    

    const  CreateNewUser = async () => {
        const result  = await Axios.post('/api/users');
        console.log(result.data);
    }

      return (
          <div>{children}</div>
  )
}


export default Provider;