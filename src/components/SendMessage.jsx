import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { GrSend, GrStar } from "react-icons/gr";
import InputEmojiWithRef from 'react-input-emoji';


export function addEmoji() {
   document.getElementById("Text").value += "😊";
}

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-emerald-700 text-black outline-none border-none`,
  button: `bg-amber-300 hover:bg-amber-400`,
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Lütfen bir mesaj yazınız!')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>

<input
id={Text}
value={input}
onChange={(e) => setInput(e.target.value)}
className={style.input}
type='text'
placeholder='Mesajınızı buraya yazınız...'>
</input>

<button className={style.button} type='button' onclick="addEmoji()">
<div class="rounded-full flex items-center space-x-4 p-4 text-4x1 bg-purple-300"> <GrStar /></div>
</button>

  <button className={style.button} type='submit'>
      <div class="flex items-center space-x-4 p-4 text-4xl"> <GrSend /></div>
      </button>
    </form>
  );
};


export default SendMessage;


