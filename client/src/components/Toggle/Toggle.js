import React from "react";
import "./style.css";

export default function Toggle() {
  return (
    <div className="my-toggle">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
