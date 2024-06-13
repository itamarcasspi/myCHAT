import React from "react";
import { useState } from "react";

const GenderDropdown = ({ handleSelect, selectedGender }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown relative w-100 py-2 flex flex-col items-center">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1"
        onClick={handleToggle}
      >
        {selectedValue ? selectedValue : "Choose gender"}
      </div>

      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 h-100"
        >
          <li>
            <a
              onClick={() => {
                setSelectedValue("Male");
                handleSelect("male");
                handleToggle();
              }}
            >
              Male
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setSelectedValue("Female");
                handleSelect("female");
                handleToggle();
              }}
            >
              Female
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default GenderDropdown;
