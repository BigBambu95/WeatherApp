import React from 'react';

const ToggleButton = ({ children, onChange }) => {
  return(
    <label className="toggle-button">
      <input type="checkbox"  className="toggle-button__input" onChange={onChange}></input>
      <div className="toggle-button__slider">
        <span>{children}</span>
      </div>
    </label>
  )
}


export default ToggleButton;