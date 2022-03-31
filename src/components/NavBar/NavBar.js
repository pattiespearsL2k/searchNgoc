import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container container wrapper">
          <Dropdown style={{ marginBottom: "20px" }}>
            <Dropdown.Toggle
              style={{
                borderRadius: "4px",
                width: "180px",
                backgroundColor: "white",
                color: "black",
              }}
              id="dropdown-basic"
            >
              Choose City
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "180px" }}>
              <Dropdown.Item href="#/action-1">Ha Noi</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Da Nang</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Ho Chi Minh</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link  to="/" className="nav-links">
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/search" className="nav-links">
                Tìm xe 
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/consult" className="nav-links">
                Tư vấn
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/evaluation" className="nav-links">
                Đánh giá xe
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/post" className="nav-links">
                Đăng tin
              </Link>
            </li>
            <Button className="navbar-button"> Đăng nhập</Button>{" "}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
