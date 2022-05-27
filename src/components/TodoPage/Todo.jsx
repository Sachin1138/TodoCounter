//input field
import React, { useState } from "react";
import "./index.css";
const Todo = ({ onAdd }) => {
  const [formData, setFormData] = useState("");
  const onChange = e => {
    const { value } = e.target;
    setFormData(value);
  };
  const onClick = () => {
    setFormData("");
    onAdd(formData);
  };
  return (
    <div className="">
      <input
      placeholder="Write Something"
        className="inputText "
        type={"text"}
        name="todo"
        onChange={onChange}
        value={formData}
      />
      <button className="button" onClick={onClick} disabled={!formData.length}>
        +
      </button>
    </div>
  );
};
export default Todo;
