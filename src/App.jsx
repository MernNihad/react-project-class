import React, { useEffect, useState } from "react";

import axios from "axios";
import Header from "./component/Header/Header";
import "./App.css";
import Banner from "./component/Banner/Banner";
import Card from "./component/Card/Card";
// import Move from "./asset/move.jpg";
function App() {
  useEffect(() => {
    // Update the document title with the current count
    actions();
    tranding()
  }, []); // Only re-run the effect if count changes

  const [move, setMovie] = useState([]);
  const [tranding_var, setTranding] = useState([]);
  const tranding_api =
    "https://api.themoviedb.org/3/trending/all/day?api_key=67bbedaa298e4f56550b511f10d6ed60";
  const actions_api =
    "https://api.themoviedb.org/3/discover/movie?api_key=67bbedaa298e4f56550b511f10d6ed60&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate";

  const actions = async () => {
    const { data } = await axios.get(actions_api);
    const { results } = data;
    setMovie(results);
  };

  const tranding = async () => {
    const { data } = await axios.get(tranding_api);
    const { results } = data;
    setTranding(results);
  };

  return (
    <div className="">
      <div className="header-component">
        <Header />
      </div>
      {/* <div className=""> */}
      <h1 style={{ color: "white", paddingLeft: "50px" }}>Trandings</h1>
      <div className="card-component container">
      {tranding_var.map((value) =><Card image={value.poster_path} className={'tranding-card'} />)}
        
      </div>
      <h1 style={{ color: "white", paddingLeft: "50px" }}>Actions</h1>
      <div className="card-component container">
        {move.map((value) =><Card className={'action-card'} image={value.poster_path} />)}
      </div>
    </div>
  );
}

export default App;
