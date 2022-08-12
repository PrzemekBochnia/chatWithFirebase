import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from './SignIn';
import LogOut from './LogOut';

const style ={
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    header: `text-white text-3xl`
}

function NavBar() {

  const [user] = useAuthState(auth)
  console.log(user);

  return (
    <div className={style.nav}>
        <h1 className={style.header}>Chat {user? user.displayName : null }</h1>
        {/* <SignIn/> */}
        {user ? <LogOut/> : <SignIn/>}
        {/* <LogOut/> */}
    </div>
  )
}

export default NavBar