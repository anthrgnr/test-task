import React, { useContext } from "react";
import Context from "../Context";

export default function Selector() {
  const { sort } = useContext(Context);
  return (
    <div className="field">
      <div className="select">
        {/* По какому полю происходит сортировка определяется в самом методе sort(), через взаимодействие с DOM */}
        <select className="sort" onChange={() => sort()}>
          <option value="0">...</option>
          <option value="name">Название страны</option>
          <option value="population">Население</option>
        </select>
      </div>
    </div>
  );
}
