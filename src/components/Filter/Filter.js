import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Filter.css";
import FilterOption from "./Filteroption";
const options = [
  {
    label: "Khoản tiền",
    options: ["300.000.000-500.000.000", 21, 3, 4],
    selectCss: {
      width: "230px",
      height: "40px",
      borderRadius: "5px",
      textAlign: "left",
      fontSize: "16px",
    },
  },
  {
    label: "Hãng xe",
    options: ["Honda", 22, 33, 44],
  },
  {
    label: "Model",
    options: ["Civic", 23, 34, 45],
  },
  {
    label: "Đời xe",
    options: [2020, 24, 35, 46],
  },
];
export default function Filter() {
  return (
    <div className="filter">
      <div className="filter-container wrapper">
        <div className="filter-select-container">
          {options.map(({ label, options, selectCss }) => (
            <FilterOption
              label={label}
              options={options}
              selectCss={selectCss}
            />
          ))}
        </div>
        <Button className="filter-button">Thêm Điều Kiện</Button>
      </div>
      <div style={{ fontSize: "20px", textAlign: "center" }}>
        HOẶC TÌM THEO MỤC ĐÍCH SỬ DỤNG
      </div>
    </div>
  );
}
