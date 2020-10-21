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

export default function SelectFilter({ secondFilterCall, secondViews }) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <FormControl
        style={{ alignSelf: "center", color: "white" }}
        className={classes.formControl}
      >
        <Select
          onChange={secondFilterCall}
          style={{ color: "white", backgroundColor: "#3E3E40" }}
          native
          defaultValue=""
          value={secondViews}
          id="grouped-native-select"
        >
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"time"}
          >
            Data
          </option>
          <option
            style={{ backgroundColor: "#333", color: "white" }}
            value={"views"}
          >
            Popolari
          </option>
        </Select>
      </FormControl>
    </div>
  );
}
