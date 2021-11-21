import React from "react";
import Select from "react-select";
const colourStyles = {
  singleValue: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? "lightGrey" : "white",
  }),
  menu: (styles) => ({
    ...styles,
    background: "linear-gradient(180deg, #BFAD75 0%, #988857 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  }),
  control: (styles) => ({
    ...styles,
    background: "transparent",
    color: "white",
    border: "none",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      background: "transparent",
      color: isSelected ? "#e8b72c" : "white",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export default function Dropdown({
  options,
  heading,
  disabled,
  setStateFunc = () => {},
  value,
}) {
  return (
    <div className="w-full relative flex items-center">
      <p className={`${disabled ? "text-gray-300" : "text-white/50"} min-w-max pr-1`}>
        {heading}:
      </p>
      <div className="w-full">
        <Select
          value={value}
          isDisabled={disabled}
          styles={colourStyles}
          isSearchable={false}
          options={options}
          onChange={(e) => setStateFunc(e.value)}
        />
      </div>
    </div>
  );
}
