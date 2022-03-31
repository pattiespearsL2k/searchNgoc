import React, { useState } from "react";
import { FooterLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="footer">
        <div className="footer-container wrapper">
          <div className="link-social">
            <ul>
              <li
                style={{ margin: "0px", fontWeight: "bold", fontSize: "18px" }}
              >
                Liên kết
              </li>
              <li>
                <box-icon type="logo" name="facebook-circle"></box-icon>
                <a href="https://projects.invisionapp.com/share/JMPUE8SBF8H#/screens/339519411">
                  Facebook
                </a>
              </li>
              <li>
                <box-icon type="logo" name="google-plus-circle"></box-icon>
                <a href="">Google+</a>
              </li>
              <li>
                <box-icon name="youtube" type="logo"></box-icon>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="link-app">
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              Bản di động
            </div>
            <div className="appstore">
              <img
                style={{ width: "110px", height: "50px" }}
                src="https://cdn.worldvectorlogo.com/logos/aivalable-on-the-app-store-2.svg"
                alt=""
              />
            </div>
            <div className="googleplay">
              <img
                style={{ width: "110px", height: "32px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt=""
              />
            </div>
          </div>
          <div className="customer-service">
            <li style={{ fontWeight: "bold", fontSize: "18px" }}>
              Hỗ trợ khách hàng
            </li>
            <li>Trung tâm trợ giúp</li>
            <li>An toàn mua bán</li>
            <li>Quy định cần biết</li>
            <li>Liên hệ hỗ trợ</li>
          </div>
          <div className="about">
            <li style={{ fontWeight: "bold", fontSize: "18px" }}>Về công ty</li>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
            <li>Truyền thông</li>
            <li>Blog</li>
          </div>
          <div className="certificate">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                paddingLeft: "20px",
              }}
            >
              Chứng nhận
            </div>
            <div className="logo">
              <img
                style={{ width: "210px", height: "100px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmt_OltbS2GgDirZwifQHDq1S6Q-lP6WKfUBUJWi0ClLJ2fmRUov2-z5qilzIP_KwRn9k&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
