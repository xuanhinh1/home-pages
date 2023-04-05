import {
  Box,
  Dialog,
  ImageList,
  ImageListItem,
  Slide,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import iconPhone from "../../images/phoneVolume.svg";
import * as React from "react";
import Header from "../../components/header";
import { Button } from "@mui/material";
import gallery1 from "../../images/gallery/gallery1.svg";
import gallery2 from "../../images/gallery/gallery2.svg";
import gallery3 from "../../images/gallery/gallery3.svg";
import more from "../../images/more.svg";
import BackgroundGallery from "../../images/background/BackgroundGallery.svg";
import gallery4 from "../../images/gallery/gallery4.svg";
import gallery5 from "../../images/gallery/gallery5.svg";
import gallery6 from "../../images/gallery/gallery6.svg";
import gallery7 from "../../images/gallery/gallery7.svg";
import bgGallery from "../../images/background/bgGallery.svg";
import playRound from "../../images/component2/iconPlay/playRound.svg";
import gallery8 from "../../images/gallery/gallery8.svg";
import service1 from "../../images/component2/service/service1.svg";
import gallery9 from "../../images/gallery/gallery9.svg";
import round from "../../images/component2/iconPlay/round.svg";
import Footer from "../../components/footer";
import Scroll from "../../components/scroll";
import { useState } from "react";
import BlockNew from "../../components/blockNew";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px",
    },
    padding: "0 150px",
    "& .wrapperHeader": {
      padding: "41px 0 125px 0",
    },
    "& .wrapAllImg": {
      paddingBottom: "66px",
      "& .wrapimg": {
        height: "100% !important",
        width: "calc((100% - 72px) / 3) !important",
        [theme.breakpoints.down(theme.lg)]: {
          width: "calc((100% ) / 3) !important",
        },
        [theme.breakpoints.down(theme.sm)]: {
          width: "100% !important",
          marginBottom: "20px",
        },
        "& .imgGallery": {
          width: "100%",
          verticalAlign: "middle",
          transform: "translateY(0%)",
        },
      },
      "& .wrapimg:not(:nth-child(3n+1))": {
        marginLeft: "36px",
        [theme.breakpoints.down(theme.lg)]: {
          marginLeft: "0",
        },
      },
      "& .wrapimg:nth-child(n+4)": {
        marginTop: "36px",
        [theme.breakpoints.down(theme.lg)]: {
          marginTop: "0",
        },
      },
    },
    "& .bgPlay": {
      backgroundImage: `url(${bgGallery})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down(theme.xl)]: {
        backgroundSize: "auto 100%",
      },
    },
  },
  flexRequest: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "75px",
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: "24px",
      color: "#8B8B8B",
      maxWidth: "360px",
      [theme.breakpoints.down(theme.lg)]: {
        maxWidth: "inherit",
        textAlign: "center",
      },
    },
    [theme.breakpoints.down(theme.lg)]: {
      textAlign: "center",
      display: "block",
    },
  },
  blockText: {
    "& .textPink16": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: "125%",
      color: "#FF64AE",
      paddingBottom: "12px",
    },
    "& .textBlueBold": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: 36,
      lineHeight: "125%",
      color: "#091156",
      paddingBottom: "12px",
      maxWidth: "620px",
      [theme.breakpoints.down(theme.lg)]: {
        maxWidth: "inherit",
        textAlign: "center",
      },
    },
  },
  wrapTextIntroduce: {
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: "30px",
      color: "#8B8B8B",
      maxWidth: "575px",
      margin: "0",
      paddingBottom: "126px",

      [theme.breakpoints.down(theme.xl)]: {
        display: "block",
        textAlign: "center",
        maxWidth: "inherit",
        paddingBottom: "30px",
      },
      "& .contactBold": {
        color: "#091156",
        fontWeight: "600",
      },
    },
  },
  bgPlay: {
    backgroundImage: `url(${bgGallery})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto 100%",
    },
    "& .bgPlayColor": {
      background: "rgba(9, 17, 86, 0.6)",
      padding: "170px 0",
      [theme.breakpoints.down(theme.xl)]: {
        padding: "140px 0",
      },
    },
  },
  flexAbout: {
    // display: "flex",
    // justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      alignItems: "center",
      paddingBottom: "0",
    },
  },
  flexAboutChild: {
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "35px",
      textAlign: "center",
    },
    "& .textAboutBold": {
      fontFamily: "Poppins",
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "125%",
      maxWidth: "520px",
      paddingBottom: "12px",
      margin: "0 auto",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
      },
    },
    "& .textAboutBlur": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "27px",
      letterSpacing: "0.1em",
      color: " #CACACA",
      margin: "0 auto",
      maxWidth: "560px",
      textAlign: "center",
      paddingBottom: "41px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "initial",
      },
    },
  },
  wrapPlayIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    [theme.breakpoints.down(theme.xl)]: {
      justifyContent: "center",
    },

    "& .round": {
      backgroundImage: `url(${round})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      width: "127px",
      height: "127px",
      position: "relative",
      "& .playRound": {
        position: "absolute",
        transform: "translate(60%,-50%)",
        top: "50%",
        right: "50%",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100px",
        height: "100px",
      },
    },
    "& .textPlay": {
      fontFamily: "Poppins",
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1em",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "120px 0 73px 0",
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
    },
    "& .buttonPinkLearn": {
      ":hover": {
        backgroundColor: "#f52e8d",
      },
      color: "#fff",
      fontFamily: "Poppins",
      height: "58px",
      width: "316px",
      backgroundColor: "#f52e8d",
      borderRadius: "50px",
      [theme.breakpoints.down(theme.lg)]: {
        width: "100%",
      },
    },
  },
  introduce1: {
    backgroundImage: `url(${BackgroundGallery})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "100% 100%",
    [theme.breakpoints.down(theme.sm)]: {
      backgroundSize: "cover",
    },
  },
  doubleButton: {
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
      textAlign: "center",
      margin: "0 auto",
    },
    "& .textAboutBoldblueClient": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "36px",
      lineHeight: "110%",
      color: "#091156",
      paddingBottom: "18px",
      maxWidth: "730px",
      [theme.breakpoints.down(theme.lg)]: {
        maxWidth: "inherit",
        textAlign: "center",
      },
    },
    "& .textAbout": {
      color: "#FF64AE",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: "125%",
      paddingBottom: "12px",
    },
    "& .textAboutBlurGray": {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      maxWidth: "560px",
      [theme.breakpoints.down(theme.lg)]: {
        maxWidth: "inherit",
        textAlign: "center",
        paddingBottom: "30px",
      },
    },
    "& .flexTextMore": {
      display: "flex",
      "& .textMore": {
        color: "#091156",
        fontSize: "16px",
        fontFamily: "Poppins",
        fontWeight: "600",
        paddingRight: "15px",
        cursor: "pointer",
      },
      [theme.breakpoints.down(theme.lg)]: {
        justifyContent: "center",
      },
    },
  },
  bgAll: {
    maxWidth: "1519.2px",
    margin: "0 auto",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Gallery = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.bgAll}>
      <Box className={classes.wrapper}>
        <Box className={"wrapperHeader"}>
          <Header handleClick={handleClickOpen} />
        </Box>

        <Box className={classes.flexRequest}>
          <Box className={classes.blockText}>
            <Typography className="textPink16">Our Gallery</Typography>
            <Typography className="textBlueBold">
              Check out the collection pictures from our clinic
            </Typography>
          </Box>
          <Typography className={"textGrey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Typography>
        </Box>

        <ImageList
          className={"wrapAllImg"}
          sx={{ width: 500, height: 450 }}
          cols={3}
          rowHeight={164}
          id="tets"
        >
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery1} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery2} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery3} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery4} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery5} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery6} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery7} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery8} loading="lazy" className="imgGallery" />
          </ImageListItem>
          <ImageListItem id="hihi" className={"wrapimg"}>
            <img src={gallery9} loading="lazy" className="imgGallery" />
          </ImageListItem>
        </ImageList>

        <Box className={classes.wrapTextIntroduce}>
          <p className="textGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim,
            <span className="contactBold"> our teams.</span>
          </p>
        </Box>
      </Box>

      <Box className={classes.bgPlay}>
        <Box className="bgPlayColor">
          <Box className={classes.wrapper}>
            <Box className={classes.flexAbout}>
              <Box className={classes.flexAboutChild}>
                <Typography className={"textAboutBold"}>
                  Watch the video tour
                </Typography>
                <Typography className={"textAboutBlur"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </Typography>
              </Box>
              <Box className={classes.wrapPlayIcon}>
                <Box className="round">
                  <img className={"playRound"} src={playRound} />
                </Box>
                <Typography className={"textPlay"}>
                  Treatments Videos
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.introduce1}>
        <Box className={classes.wrapper}>
          <Box className={classes.flex}>
            <Box className={classes.flexsWithAbout}>
              <Box className={classes.doubleButton}>
                <Typography className={"textAbout"}>Get The Quota</Typography>
                <Typography className={"textAboutBoldblueClient"}>
                  Want to be handled by our professional team immediately?
                </Typography>
                <Typography className={"textAboutBlurGray"}>
                  Id dui erat sed quam tellus in purus. Pellentesque congue
                  fringilla cras tellus enim.
                </Typography>
              </Box>
            </Box>
            <Button className={"buttonPinkLearn"} variant="text">
              Make an Appointment
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BlockNew />
      </Dialog>

      <Scroll />
    </Box>
  );
};

export default Gallery;
