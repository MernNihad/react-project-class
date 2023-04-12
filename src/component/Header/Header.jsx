import React from "react";
import NetFlix from "../../asset/netflix.png";
import UserIcon from "../../asset/user.png";
import SearchIcon from "../../asset/search.png";
import './Header.css'

function Header() {
  return (
    <div className="main-header-body">
      <div className="container">
        <div className="row">
          <div className="container-body">
            <div className="container-body-left">
              <img className="container-body-left-image" src={NetFlix} alt="" />
            </div>
            <div className="container-body-middle">
              <div className="container-body-left-lists">
                <li className="container-body-left-list">Home</li>
                <li className="container-body-left-list">About</li>
                <li className="container-body-left-list">Tranding</li>
              </div>
            </div>
            <div className="container-body-right">
              <img className="container-body-right-image" src={UserIcon} alt="" />
              <img className="container-body-right-image" src={SearchIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
