import React, { useState } from "react";

import axios from "axios";
import Header from "./component/Header/Header";
import './App.css'
import Banner from "./component/Banner/Banner";
import Card from "./component/Card/Card";
import Move from "./asset/move.jpg";
function App() {
  
  const [move,setMovie]= useState(Move)
  return (

    <div className="">
      <div className="header-component">
        <Header/>
      </div>
     {/* <div className=""> */}
     <div className="card-component container">
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
     </div>
     <div className="card-component container">
      <Card image={move} />
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
      <Card image={move}/>
     </div>
     
    </div>
  );
}

export default App;
