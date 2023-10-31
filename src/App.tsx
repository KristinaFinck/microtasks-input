import React, {useState} from 'react';
import './App.css';
//import {FullInput} from "./fullInput/FullInput";
import {Input} from './fullInput/Input';
import {Button} from './fullInput/Button';


function App() {
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])
  let [title, setTitle] = useState('')
  console.log(title)
  const addMessage = (title:string) => {
    let newMessage = {message: title}
    setMessage([newMessage,... message])
  }
  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }
  return (
    <div className="App">
    <Input setTitle={setTitle} title={title}/>
      <Button name={'+'} callBack={callBackButtonHandler} />

      {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
      })}
    </div>

  );
}

export default App;
