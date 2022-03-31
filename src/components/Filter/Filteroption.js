import React from "react";
import { Button, Form } from "react-bootstrap";
const FilterOption = ({ label, options, selectCss }) => {
  return (
    <div className="filter-select">
      <h2 className="filter-title">{label}</h2>
      <select className="filter-input" style={selectCss}>
        {options.map((opt) => (
          <option>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterOption;
