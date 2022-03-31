import React from "react";
import "./Service.css";
import Serviceoption from "./Serviceoption";

export const Service = () => {

  
  const serviceList = [
    {
      title: 'XE ĐƯỢC XÁC NHẬN KIỂM TRA',
      desc: 'Tất cả xe được đăng đều đã được \n xác nhận thông tin',
      className: 'car-verified'
    },
    {
      title: 'DỊCH VỤ KIỂM TRA XE THEO YÊU CẦU',
      desc: 'Đội ngũ sửa xe lành nghề sẽ giúp bạn \n kiểm tra xác thực tình trạng xe',
      className: 'car-demand'
    },
  ]

  return (
    <div className="service">
      <div className="service-container wrapper">
        <h2 style={{ fontWeight: "400", color: "#000", marginTop: "20px" }}>
          DỊCH VỤ
        </h2>
        <div className="row">
          {
            serviceList.map((service,index) => (
              <Serviceoption service={service} key={index}  />
            ))
          }
          
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#4291bb",
          width: "100%",
          height: "2.5px",
          marginTop: "20px",
        }}
      ></div>
      <div className="service-container wrapper">
        <h2 style={{ fontWeight: "400", color: "#000", marginTop: "20px" }}>
          SỬ DỤNG ĐƠN GIẢN
        </h2>
        <div className="row collum4">
          <div style={{ marginRight: "10px" }}>
            <div className="car-search"></div>
            <div className="using-title">
              <a href=""> TÌM XE DỄ DÀNG</a>
              <p>Dễ dàng tìm kiếm xe và phù hợp với nhu cầu sử dụng</p>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="car-search"></div>
            <div className="using-title">
              <a href=""> SO SÁNH XE</a>
              <p>
                So sánh chức năng và giá cả để lựa chọn được xe phù hợp nhất
              </p>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="car-search"></div>
            <div className="using-title">
              <a href=""> THỢ KIỂM TRA</a>
              <p>Xe được kiểm tra bởi thợ có kinh nghiệm</p>
            </div>
          </div>
          <div style={{ marginRight: "10px" }}>
            <div className="car-search"></div>
            <div className="using-title">
              <a href=""> GIÁ TỐT NHẤT</a>
              <p>Mua xe được giá tốt nhất phù hợp với giá trị xe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
