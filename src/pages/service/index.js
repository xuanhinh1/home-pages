import { Box, Button, Dialog, makeStyles } from "@material-ui/core";
import Header from "../../components/header";
import { Slide, Typography } from "@mui/material";
import BubbleBGFooter from "../../images/background/BubbleBGFooter.svg";
import * as React from "react";
import servicePersion from "../../images/background/servicePersion.svg";
import doctor1 from "../../images/img doctor/doctor1.svg";
import doctor2 from "../../images/img doctor/doctor2.svg";
import doctor3 from "../../images/img doctor/doctor3.svg";
import doctor4 from "../../images/img doctor/doctor4.svg";
import more from "../../images/more.svg";
import service1 from "../../images/component2/service/service1.svg";
import service2 from "../../images/component2/service/service2.svg";
import playWhite from "../../images/play/PlayButton2.svg";
import service3 from "../../images/component2/service/service3.svg";
import round from "../../images/component2/iconPlay/round.svg";
import playRound from "../../images/component2/iconPlay/playRound.svg";
import BlockNew from "../../components/blockNew";
import { useState } from "react";

import List from "@mui/joy/List";
import ListItem, { listItemClasses } from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Footer from "../../components/footer";
import Scroll from "../../components/scroll";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px",
    },
    padding: "0 150px",
  },
  wrapper170: {
    padding: "0 170px 87px",
    marginBottom: "54px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px 50px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px 50px",
    },
  },
  wrapHeader: {
    padding: "41px 0 125px 0",
  },
  root: {
    textAlign: "center",
    paddingBottom: "70px",
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
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: "24px",
      color: "#8B8B8B",
    },
  },
  flexDoctor1: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "68px",
    "& .imgFlexDoctor1": {
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "50%",
        margin: "0 auto",
      },
      [theme.breakpoints.down(theme.sm)]: {
        width: "100%",
        maxWidth: "inherit",
        margin: "0",
      },
    },
    [theme.breakpoints.down(theme.xl)]: {
      flexDirection: "column-reverse",
      paddingBottom: "30px",
      "& .imgFlexDoctor2": {
        paddingBottom: "68px",
        textAlign: "center",
        [theme.breakpoints.down(theme.xl)]: {
          paddingBottom: "30px",
        },
        [theme.breakpoints.down(theme.sm)]: {
          paddingBottom: "20px",
        },
      },
    },
    [theme.breakpoints.down(theme.sm)]: {
      paddingBottom: "20px",
      // alignItems: "center",
    },
  },
  flexDoctor2: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
      "& .imgFlexDoctor3": {
        [theme.breakpoints.down(theme.xl)]: {
          width: "100%",
          paddingBottom: "20px",
        },
        [theme.breakpoints.down(theme.sm)]: {
          paddingBottom: "20px",
        },
      },
      "& .imgFlexDoctor4": {
        [theme.breakpoints.down(theme.sm)]: {
          width: "100%",
        },
      },
    },
  },
  bgBubber: {
    backgroundImage: `url(${BubbleBGFooter})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    paddingTop: "30px",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
      textAlign: "center",
      // marginBottom: "80.64px",
    },
  },
  imgPlay: {
    height: "100%",
    cursor: "pointer",
    [theme.breakpoints.down(theme.lg)]: {
      width: "100%",
      paddingBottom: "30px",
    },
  },
  doubleButton: {
    maxWidth: "475px",
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
      paddingBottom: "24px",
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
      paddingBottom: "9px",
      // [theme.breakpoints.down(theme.xl)]: {
      //   maxWidth: "inherit",
      //   textAlign: "center",
      //   paddingBottom: "0",
      // },
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
  bgColorF: {
    backgroundColor: "#FFFFFF",
    maxWidth: "1519.2px",
    margin: "0 auto",
    "& .bgPlay": {
      backgroundImage: `url(${servicePersion})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down(theme.xl)]: {
        backgroundSize: "auto 100%",
      },
    },
    "& .question": {
      textAlign: "center",
      paddingTop: "116px",
      textAlign: "center",
      paddingBottom: "68px",
      "& .title": {
        fontFamily: "Poppins",
        color: "#091156",
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "125%",
        paddingBottom: "21px",
      },
      "& .line": {
        width: "40px",
        border: "3px solid #FF64AE",
        borderRadius: "20px",
        margin: "0 auto",
      },
    },
    "& .bgPlayColor": {
      background: "rgba(9, 17, 86, 0.6)",
      padding: "182px 0",
      [theme.breakpoints.down(theme.xl)]: {
        padding: "140px 0",
      },
    },
  },
  introduce1: {
    paddingBottom: "132px",
    [theme.breakpoints.down(theme.lg)]: {
      paddingBottom: "60px",
    },
  },
  paddingBT50: {
    [theme.breakpoints.down(theme.lg)]: {
      paddingBottom: "60px",
    },
  },
  flexAbout: {
    display: "flex",
    justifyContent: "space-between",
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
      paddingBottom: "10px",
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
      color: " #D8DCFF",
      maxWidth: "560px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "initial",
      },
    },
  },
  wrapPlayIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
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
  bgPlay: {
    padding: "182px 0",
    backgroundImage: `url(${servicePersion})`,
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
  },
  selectOption: {
    padding: "0 84px 104px",
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px 50px",
    },
    "& .wrapSelect": {
      margin: "0 0 31px 0",
      padding: "0",
      "& .wrapSelectChild": {
        margin: "0",
        padding: "0",
      },
      "& .wrapSelectChildren": {
        "& .textQuestion": {
          fontWeight: "600",
          fontSize: "16px",
          color: "#091156",
          [theme.breakpoints.down(theme.sm)]: {
            maxWidth: "80%",
          },
        },
      },
    },
  },
  answer: {
    backgroundColor: "#F7F7FF",
    padding: "52px 63px 53px 76px",
    fontStyle: "italic",
    color: "#8B8B8B",
    fontWeight: "400",
    fontSize: "14px",
    borderRadius: "0px 0px 20px 20px",
    borderTop: "1px solid #091156",
    [theme.breakpoints.down(theme.sm)]: {
      padding: "20px 40px",
    },
  },
  textQuestion: {},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const Service = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.bgColorF}>
      <Box className={classes.wrapper}>
        <Box className={classes.wrapHeader}>
          <Header handleClick={handleClickOpen} />
        </Box>
      </Box>

      <Box className={classes.bgBubber}>
        <Box className={classes.root}>
          <Typography className={"textPink16"}>Our Services</Typography>
          <Typography className={"textBlueBold"}>
            We focus on your beauty
          </Typography>
          <Typography className={"textGrey"}>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>

        <Box className={classes.wrapper170}>
          <Box className={classes.flexDoctor1}>
            <img className={"imgFlexDoctor1"} src={doctor1} />
            <img className={"imgFlexDoctor2"} src={doctor2} />
          </Box>
          <Box className={classes.flexDoctor2}>
            <img className={"imgFlexDoctor3"} src={doctor3} />
            <img className={"imgFlexDoctor4"} src={doctor4} />
          </Box>
        </Box>
      </Box>

      <Box className={classes.introduce1}>
        <Box className={classes.wrapper}>
          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={service1} />
            <Box className={classes.flexsWithAbout}>
              <Box className={classes.doubleButton}>
                <Typography className={"textAbout"}>
                  Beauty Consultation
                </Typography>
                <Typography className={"textAboutBoldblueClient"}>
                  We services beauty consultation
                </Typography>
                <Typography className={"textAboutBlurGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">
                    Make an Appointment
                  </Typography>
                  <img src={more} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.introduce1}>
        <Box className={classes.wrapper}>
          <Box className={classes.flex}>
            <Box className={classes.flexsWithAbout}>
              <Box className={`${classes.doubleButton} ${classes.paddingBT50}`}>
                <Typography className={"textAbout"}>
                  Beauty Consultation
                </Typography>
                <Typography className={"textAboutBoldblueClient"}>
                  We services beauty consultation
                </Typography>
                <Typography className={"textAboutBlurGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">
                    Make an Appointment
                  </Typography>
                  <img src={more} />
                </Box>
              </Box>
            </Box>
            <img className={classes.imgPlay} src={service2} />
          </Box>
        </Box>
      </Box>

      <Box className={classes.introduce1}>
        <Box className={classes.wrapper}>
          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={service3} />
            <Box className={classes.flexsWithAbout}>
              <Box className={classes.doubleButton}>
                <Typography className={"textAbout"}>
                  Beauty Consultation
                </Typography>
                <Typography className={"textAboutBoldblueClient"}>
                  We services beauty consultation
                </Typography>
                <Typography className={"textAboutBlurGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">
                    Make an Appointment
                  </Typography>
                  <img src={more} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={"bgPlay"}>
        <Box className="bgPlayColor">
          <Box className={classes.wrapper}>
            <Box className={classes.flexAbout}>
              <Box className={classes.flexAboutChild}>
                <Typography className={"textAboutBold"}>
                  Your beauty center place
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

      <Box className="question">
        <Typography className="title">Services FAQ’s</Typography>
        <Box className="line"></Box>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BlockNew />
      </Dialog>

      <Box className={classes.wrapper}>
        <Box className={classes.selectOption}>
          <List className="wrapSelect" id="hehe1" size="sm">
            <ListItem
              nested
              className="wrapSelectChild"
              sx={{ my: 1 }}
              endAction={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="#091156"
                  onClick={() => setOpen2((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{
                      transform: open2 ? "rotate(-180deg)" : "rotate(-360deg)",
                    }}
                  />
                </IconButton>
              }
            >
              <ListItem className="wrapSelectChildren">
                <Typography
                  level="inherit"
                  id="test"
                  className={"textQuestion"}
                >
                  Is beauty consultation handled thoroughly?
                </Typography>
              </ListItem>
              {open2 && (
                <Box className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna
                  <br /> <br /> porttitor rhoncus dolor purus non enim praesent
                  elementum facilisis leo, vel fringilla est ullamcorper eget
                  nulla
                </Box>
              )}
            </ListItem>
          </List>

          <List className="wrapSelect" id="hehe1" size="sm">
            <ListItem
              nested
              className="wrapSelectChild"
              sx={{ my: 1 }}
              endAction={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="#091156"
                  onClick={() => setOpen3((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{
                      transform: open3 ? "rotate(-180deg)" : "rotate(-360deg)",
                    }}
                  />
                </IconButton>
              }
            >
              <ListItem className="wrapSelectChildren">
                <Typography
                  level="inherit"
                  id="test"
                  className={"textQuestion"}
                >
                  Is beauty consultation handled thoroughly?
                </Typography>
              </ListItem>
              {open3 && (
                <Box className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna
                  <br /> <br /> porttitor rhoncus dolor purus non enim praesent
                  elementum facilisis leo, vel fringilla est ullamcorper eget
                  nulla
                </Box>
              )}
            </ListItem>
          </List>

          <List className="wrapSelect" id="hehe1" size="sm">
            <ListItem
              nested
              className="wrapSelectChild"
              sx={{ my: 1 }}
              endAction={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="#091156"
                  onClick={() => setOpen4((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{
                      transform: open4 ? "rotate(-180deg)" : "rotate(-360deg)",
                    }}
                  />
                </IconButton>
              }
            >
              <ListItem className="wrapSelectChildren">
                <Typography
                  level="inherit"
                  id="test"
                  className={"textQuestion"}
                >
                  Is beauty consultation handled thoroughly?
                </Typography>
              </ListItem>
              {open4 && (
                <Box className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna
                  <br /> <br /> porttitor rhoncus dolor purus non enim praesent
                  elementum facilisis leo, vel fringilla est ullamcorper eget
                  nulla
                </Box>
              )}
            </ListItem>
          </List>

          <List className="wrapSelect" id="hehe1" size="sm">
            <ListItem
              nested
              className="wrapSelectChild"
              sx={{ my: 1 }}
              endAction={
                <IconButton
                  variant="plain"
                  size="sm"
                  color="#091156"
                  onClick={() => setOpen5((bool) => !bool)}
                >
                  <KeyboardArrowDown
                    sx={{
                      transform: open5 ? "rotate(-180deg)" : "rotate(-360deg)",
                    }}
                  />
                </IconButton>
              }
            >
              <ListItem className="wrapSelectChildren">
                <Typography
                  level="inherit"
                  id="test"
                  className={"textQuestion"}
                >
                  Is beauty consultation handled thoroughly?
                </Typography>
              </ListItem>
              {open5 && (
                <Box className={classes.answer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna
                  <br /> <br /> porttitor rhoncus dolor purus non enim praesent
                  elementum facilisis leo, vel fringilla est ullamcorper eget
                  nulla
                </Box>
              )}
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box>
        <Footer />
      </Box>

      <Scroll />
    </Box>
  );
};

export default Service;
