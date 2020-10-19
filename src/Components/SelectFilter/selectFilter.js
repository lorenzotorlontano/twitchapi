import React from "react";
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

export default function SelectFilter() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <FormControl
        style={{ alignSelf: "center", color: "white" }}
        className={classes.formControl}
      >
        <Select
          style={{ color: "white", backgroundColor: "#3E3E40" }}
          native
          defaultValue=""
          id="grouped-native-select"
        >
          <option style={{ backgroundColor: "#333", color: "white" }} value={0}>
            In primo piano
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={1}>
            Trasmissioni precedenti
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={2}>
            In Evidenza
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={3}>
            Clip
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={4}>
            Caricamenti
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={5}>
            Antemprime precendenti
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={6}>
            Raccolte
          </option>
          <option style={{ backgroundColor: "#333", color: "white" }} value={7}>
            Tutti i video
          </option>
        </Select>
      </FormControl>
    </div>
  );
}
