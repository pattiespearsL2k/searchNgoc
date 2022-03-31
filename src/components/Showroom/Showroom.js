import React from "react";
import "./Showroom.css";
export const Showroom = () => {
  return (
    <div className="showroom">
      <div className="showroom-container wrapper">
        <h2 style={{ fontWeight: "400", color: "#fff", marginTop: "20px" }}>
          SHOWROOM GẦN BẠN
        </h2>
        <div className="row">
          <div style={{ marginRight: "10px" }}>
            <div className="showroom-detail audi"></div>
            <div className="showroom-title">
              <a href="">Audi Da Nang</a>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="showroom-detail mec"></div>
            <div className="showroom-title">
              <a href="">Mecerdes Da Nang</a>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="showroom-detail bmw"></div>
            <div className="showroom-title">
              <a href="">BMW Da Nang</a>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="showroom-detail volvo"></div>
            <div className="showroom-title">
              <a href="">Volvo Da Nang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
