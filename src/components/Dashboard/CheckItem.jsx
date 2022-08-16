import React from 'react'

const CheckItem = (props) => {
  return (
    <label className="m-0 cursor-pointer label">
      <input type="checkbox" className="mr-10 checkbox checkbox-accent" />
      <span className="label-text ml-0">{props.item}</span>
    </label>
  );
}

export default CheckItem