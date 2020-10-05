import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({

    root: {
        textAlign: "center",
        backgroundColor: "#18181B",
    },

    videoWrapper: {
        // marginTop: "20px"
    },

    gridWrapper: {
        display: "flex",
        justifyContent: "center",

    },

    gridItem: {
        display: "flex",
        justifyContent: "center",
        transition: "244ms all",
        "&:hover": {
            marginLeft: "0 11px",
            transform: "scale(1.1)",
            cursor: "pointer"
        }
    }

}));
