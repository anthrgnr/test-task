import React, { useContext } from "react";
import Context from "../Context";

export default function Selector() {
  const { sort } = useContext(Context);
  return (
    <div className="field">
      <div className="select">
        <select className="sort" onChange={sort}>
          <option value="0">...</option>
          <option value="name">Country name</option>
          <option value="population">Population</option>
        </select>
      </div>
    </div>
  );
}
