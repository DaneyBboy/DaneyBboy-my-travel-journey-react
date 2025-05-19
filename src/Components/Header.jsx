import React from "react";
import { HiMiniGlobeAmericas } from "react-icons/hi2";

export default function Header() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#F55A5A",}}
      >
        <div style={{display: "flex",
          justifyContent: "center"}}>
          <HiMiniGlobeAmericas style={{ fontSize: "60px", marginTop:"24px", color:"white"  }} />
          <p style={{ fontSize: "xx-large", color:"white" }}>my travel journal.</p>
        </div>
      </nav>
    </div>
  );
}
