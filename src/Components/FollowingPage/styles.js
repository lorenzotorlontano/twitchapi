import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#18181B",
    // overflowX: "hidden"
  },

  followingCategories: {
    color: "whitesmoke",
  },

  followingCategoriesWrapper: {
    maxWidth: "667px",
    maxHeight: "59px",
    marginBottom: "12px",
    marginTop: "12px",
  },

  followingTitle: {
    color: "whitesmoke",
    textAlign: "left",
    paddingLeft: "22px",
    marginBottom: "12px",
    marginTop: "12px",
    fontSize: "large",
  },

  // videoWrapper: {
  //     // marginTop: "20px"
  // },

  // gridWrapper: {
  //     display: "flex",
  //     justifyContent: "center",

  // },

  // gridItem: {
  //     display: "flex",
  //     justifyContent: "center",
  //     transition: "244ms all",
  //     "&:hover": {
  //         marginLeft: "0 11px",
  //         transform: "scale(1.1)",
  //         cursor: "pointer"
  //     }
  // }
}));
