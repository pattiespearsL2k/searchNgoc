import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Purpose.css";

export const Purpose = () => {
  return (
    <div className="purpose">
      <div className="purpose-container wrapper">
        <div className="row">
          <div className="car-img family col-up">
            <div className="car-title">
              <a href=""> XE DÙNG CHO GIA ĐÌNH</a>
            </div>
          </div>
          <div className="car-img company col-up">
            <div className="car-title">
              <a href="">XE CHO DOANH NGHIỆP</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="car-img small-car col-down">
            <div className="car-title">
              <a href=""> XE NHỎ DỄ LÁI</a>
            </div>
          </div>
          <div className="car-img saving-car col-down">
            <div className="car-title">
              <a href=""> XE TIẾT KIỆM NHIÊN LIỆU</a>
            </div>
          </div>
          <div className="car-img service-car col-down">
            <div className="car-title">
              <a href="">XE DỊCH VỤ</a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#4291bb",
          width: "100%",
          height: "2.5px",
          marginTop: "30px",
        }}
      ></div>
    </div>
  );
};
