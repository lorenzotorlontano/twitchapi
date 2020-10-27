import { makeStyles } from "@material-ui/core/styles";
import { FullscreenExit } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  profileImg: {
    borderRadius: "224px",
    width: "159px",
    height: "159px",
    position: "absolute",

    zIndex: "1",
  },
  backgroundImg: {
    borderRadius: "4px",
    width: "369px",
    height: "224px",
    opacity: "0.25",
  },

  channelsGridWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));
