import React from "react";

export default function ListItem(props) {
  return (
    <div className="news-item">
      <div className="link">
        <img className="image" src={props.country.flag} alt="Изображение флага" />
      </div>
      <div className="description">
        <p className="name">Country name: {props.country.name}</p>
        <p>Population: {props.country.population}</p>
      </div>
    </div>
  );
}
