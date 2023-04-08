import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [login,setLogin] = useState(false)
  const [signup,setSingup] = useState(false)

  const handle =()=> {
    // console.log('clicked..')
    setLogin(true)
    setSingup(false)
  }
 const handleSingup = ()=>{
  setSingup(true) 
  setLogin(false)}

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 >{number}</h1>
        <button onClick={ClickHandle} style={{padding:'10px',margin:'10px'}}>Button</button> */}
        <button onClick={handle} >Login</button>
        <button onClick={handleSingup}>Signup</button>


      { login&& <form action="">
          <h4>Login</h4>
          <input type="text"  placeholder='Email'/>
          <input type="text" placeholder='Password' />
        </form>}

       { signup&& <form action="">
          <h4>Signup</h4>
          <input type="text"  placeholder='Name'/>
          <input type="text"  placeholder='Email'/>
          <input type="text" placeholder='Password' />
        </form>}





      </header>
    </div>
  );
}

export default App;
