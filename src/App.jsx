import "./App.css";
import React, { useState } from "react";

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [status,setStatus] = useState(false)

  const handleSubmit = (event)=>{
    event.preventDefault()
    setStatus(true)
    console.log(event);
  }
  const handleName = (event) => setName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  return (
    <div className="App" >
      <form action="" onSubmit={handleSubmit} className="form">
        <h4>Signup</h4>
        <input type="text" placeholder="Name" name="name" onChange={handleName} value={name}  />
        <input type="text" placeholder="Email" name="email" onChange={handleEmail} value={email} />
        <input type="text" placeholder="Password" name="password" onChange={handlePassword} value={password} />
        <button type="submit">Submit</button>
      </form>

      { status&&<div className="form-body">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>}
    </div>
  );
}

export default App;
