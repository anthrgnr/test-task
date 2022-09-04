import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div className="news-list">
      {props.countries.map((element) => {
        return <ListItem country={element} />;
      })}
    </div>
  );
}
