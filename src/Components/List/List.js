import React from "react"
import ListItem from "./ListItem"

const List = ({ countries }) => (
  <div className="news-list">
    {countries.map((element, index) => (
      <ListItem key={index} country={element} />
    ))
    }
  </div>
)

export default List
