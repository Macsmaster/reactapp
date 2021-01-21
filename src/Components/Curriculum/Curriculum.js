import React from "react";
import "./Curriculum.css";

const curriculum = (props) => {
  return (
    <div className="d-flex">
      <div className="w-25">
        <p className="fs-5">{props.name + " " + props.lastname}</p>
        <img
          src={props.imgProfile}
          alt={props.name}
          width="100px"
          height="80px"
        />
        <p>
          <span className="fa fa-whatsapp"></span> 3105552562
        </p>
        <p>
          <span className="fas fa-map-market">{props.location}</span>
        </p>
      </div>
      <div className="d-block w-75">
        <h2>Curriculum vitae</h2>
      </div>
    </div>
  );
};

export default curriculum;
