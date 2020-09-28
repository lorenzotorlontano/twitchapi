import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-evenly"
    },

    videoWrapper: {
        display: "flex",
        justifyContent: "space-evenly"
    },

    gridItem: {
        // marginRight: "5px",
        // marginLeft: "10px",
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "5px",
        marginTop: "5px"

    }

}));
