import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ItemOne from "../../Components/ItemOne/itemOne";
import ItemTwo from "../../Components/ItemTwo/itemTwo";
import ItemThree from "../../Components/ItemThree/itemThree";
import ItemFour from "../../Components/ItemFour/itemFour";
import ItemFive from "../../Components/ItemFive/itemFive";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0E0E10",
  },
}));

export default function TabsFullScreen({ id }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#0E0E10" }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Informazioni" {...a11yProps(1)} />
          <Tab label="Programmazione" {...a11yProps(2)} />
          <Tab label="video" {...a11yProps(3)} />
          <Tab label="chat" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ItemOne id={id} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ItemTwo id={id} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ItemThree id={id} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ItemFour id={id} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ItemFive id={id} />
      </TabPanel>
    </div>
  );
}
