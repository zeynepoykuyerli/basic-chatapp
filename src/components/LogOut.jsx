import React from 'react'
import {auth} from '../firebase'
import { AiOutlineHome } from "react-icons/ai";


const style = {
  button: `bg-purple-300 px-4 py-2 hover:bg-red-200`
} 

const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>


      <div class='flex items-center p-2 text-5xl'><AiOutlineHome /></div>
     

    </button>
  )
}

export default LogOut