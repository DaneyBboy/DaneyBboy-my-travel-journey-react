import React from "react";
import { ImLocation } from "react-icons/im";

function Main(props) {
  return (
    <div style={{ display: "flex", justifyContent: "left", gap: "10px", margin:"5%" }}>
      <div>
        <img
          style={{ width: "300px", height: "354px", borderRadius: "5%" }}
          src={props.item.image}
          alt="pic"
        />
      </div>

      <div style={{ textAlign: "left", marginTop:"2%" }}>
        <div>
        <ImLocation style={{color:"#e3435f", width:"20px", margin:"0px", height:"15px"}} />
        <h4 style={{ letterSpacing: "5px", display: "inline", color:"#2B283A" }}>
          {props.item.location}
        </h4>
        <p style={{ textDecoration: "underline", display: "inline", color:"#918E9B" }}>
          View on Google Maps
        </p>

        <h1 style={{color:"#2B283A"}}>{props.item.place}</h1>

        <h4 style={{color:"#2B283A"}}>{props.item.date}</h4>
        <p style={{color:"#2B283A"}}>{props.item.title}</p>

        </div>
        
      </div>
    </div>
  );
}

export default Main;
