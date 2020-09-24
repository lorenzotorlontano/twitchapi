import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function StreamList({ index, text, currentUrl }) {
  return (
    <ListItem
      style={{ display: "flex", alignSelf: "center", justifyContent: "center" }}
      key={index}
      button
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          padding: "0px",
        }}
        src={currentUrl}
      />
      <ListItemText
        primary={text !== null ? <span>{text.user_name}</span> : ""}
      />
      <ListItemText
        primary={text !== null ? <span>{text.viewer_count}</span> : ""}
      />
    </ListItem>
  );
}

export default StreamList;
