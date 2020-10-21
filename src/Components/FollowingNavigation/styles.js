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
  menuTabsRoot: {
    marginBottom: "12px",
    marginTop: "12px",
    backgroundColor: "transparent",
  },
  menuTab: {
    color: "whitesmoke",
    maxWidth: "69px",
    maxHeight: "44px",
  },
}));
