import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    display: "flex",
    minWidth: 120,
    alignSelf: "center",
  },
}));

export default function SelectFilter({ filterCall, views }) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <FormControl
        style={{ alignSelf: "center", color: "white" }}
        className={classes.formControl}
      >
        <Select
          onChange={filterCall}
          style={{ color: "white", backgroundColor: "#3E3E40" }}
          native
          defaultValue=""
          value={views}
          id="grouped-native-select"
        >
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"highlight"}
          >
            In primo piano
          </option>
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"upload"}
          >
            Caricamenti
          </option>
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"archive"}
          >
            Raccolte
          </option>
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"all"}
          >
            Tutti i video
          </option>
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"clips"}
          >
            clips
          </option>
        </Select>
      </FormControl>
    </div>
  );
}
