import React from "react";
import SearchBarStyle from "./style.module.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import DatePicker from "react-widgets/DatePicker";

export default function venueSearchBar() {
  return (
    <div className={SearchBarStyle.venueSearchBarContainer}>
      <input className={SearchBarStyle.zipCode} placeholder="ZIP CODE"></input>
      <Dropdown>
        <Dropdown.Toggle>TYPE</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Lounge</Dropdown.Item>
          <Dropdown.Item>Bar</Dropdown.Item>
          <Dropdown.Item>Restaurant</Dropdown.Item>
          <Dropdown.Item>Banquet Hall</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <DatePicker
        defaultValue={new Date()}
        valueEditFormat={{ dateStyle: "short" }}
        valueDisplayFormat={{ dateStyle: "short" }}
      />
    </div>
  );
}
