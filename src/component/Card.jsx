import React from "react";

function Card({className,title,sub_title,description,link}) {
  return (
    <div className="m-3">
      <div className={`card ${className}`} style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{sub_title}</h6>
          <p className="card-text">{description}</p>
          <a className="card-link">{link}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
