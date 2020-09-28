import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function StreamList({ index, text, currentUrl }) {
  return (
    <ListItem
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        padding: "5px",
        width: "100%",
      }}
      key={index}
      button
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        }}
        src={currentUrl}
      />
      <ListItemText
        style={{ width: "100%", paddingLeft: "5px" }}
        primary={
          text !== null ? (
            <div
              style={{ fontSize: "14px", maxWidth: "100px", overflow: "hidden" }}
            >
              <span
                style={{
                  overflow: "hidden",
                  color: "#DEDEE3",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {text.title}
              </span>
              <div
                style={{
                  display: "flex",
                  color: "#ADADB8",
                  textTransform: "capitalize",
                  fontSize: "12px",
                }}
              >
                {text.user_name}
              </div>
            </div>
          ) : (
            ""
          )
        }
      />
      <ListItemText
        style={{}}
        primary={
          text !== null ? (
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                paddingLeft: "10px",
                paddingRight: "30px",
                marginLeft: "3px",
              }}
            >
              <div style={{ fontSize: "12px", display: "flex", marginRight: '30px' }}>
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                    alignSelf: "center",
                  }}
                ></div>
                <span style={{color: '#1f1f23'}}>{"P"}</span>
                {text.viewer_count}
              </div>
            </div>
          ) : (
            ""
          )
        }
      />
    </ListItem>
  );
}
export default StreamList;