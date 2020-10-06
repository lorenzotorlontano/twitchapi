import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({

    carouselItem: {

        // width: "100%",
        // height: "500px",
        // objectFit: "cover",

    },

    carouselRoot: {
        margin: "0 auto"
        // display: "flex",
        // justifyContent: "center"
    },

    carouselWrapper: {
        margin: "0 auto",
        maxHeight: "600px",
        maxWidth: "404px",
        display: "flex",
        color: "whitesmoke",
        // borderRadius: "4px"
    },

    aliceCarousel: {
        justifyContent: "center",
        color: "whitesmoke"
        // height: "0px",
    }

}));