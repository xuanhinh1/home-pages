import { Box, Dialog, makeStyles, Slide, Typography } from "@material-ui/core";
import * as React from "react";
import { Button, TextField } from "@mui/material";
import Header from "../../componentNew/header";
import playWhite from "../../images/play/PlayButton2.svg";
import backgroundHome2 from "../../images/background/backgroundHome2.svg";
import Illustration from "../../images/about/Illustration.svg";
import icon2 from "../../images/component2/mainService2/icon2.svg";
import icon3 from "../../images/component2/mainService2/icon3.svg";
import icon4 from "../../images/component2/mainService2/icon4.svg";
import more from "../../images/more.svg";
import ware from "../../images/component2/background/WaveLine.svg";
import BackgroundWaveRight from "../../images/component2/background/BackgroundWaveRight.svg";
import bgChoosing from "../../images/component2/background/bgChoosing.svg";
import handShake from "../../images/component2/icon2/handshake1.svg";
import doctor1 from "../../images/component2/icon2/doctor1.svg";
import earth1 from "../../images/component2/icon2/earth1.svg";
import brotherhood1 from "../../images/component2/icon2/brotherhood1.svg";
import introduce1 from "../../images/component2/introduce/introduce1.svg";
import introduce2 from "../../images/component2/introduce/introduce2.svg";
import introduce3 from "../../images/component2/introduce/introduce3.svg";
import iconPhone from "../../images/phoneVolume.svg";
import Footer from "../../components/footer";
import Overlay from "../../components/overlay";
import Scroll from "../../components/scroll";
import BlockNew from "../../components/blockNew";
import { useState } from "react";
// import { useState } from "react";

const buttonPink = {
  ":hover": {
    backgroundColor: "#f52e8d",
  },
  color: "#fff",
  fontFamily: "Poppins",
};

const useStyles = makeStyles((theme) => ({
  home: {
    maxWidth: "1519.2px",
    margin: "0 auto",
    "& .wrapperHeader": {
      [theme.breakpoints.down(theme.sm)]: {
        textAlign: "center",
      },
      "& .wrapperHeaderChild": {
        padding: "41px 0 204px",
        [theme.breakpoints.down(theme.xl)]: {
          padding: "41px 0 130px",
        },
      },
    },
  },
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
    },
    [theme.breakpoints.down(theme.sm)]: {
      padding: "0 20px",
    },
    padding: "0 150px",
  },
  advertise: {
    display: "flex",
    // paddingBottom: "373px",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
    },
  },
  flexAbout: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "400px",
    [theme.breakpoints.down(theme.sm)]: {
      display: "block",
      alignItems: "center",
      paddingBottom: "0",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "157.64px",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
      marginBottom: "80.64px",
    },
  },
  flexRequest: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "110px",
    [theme.breakpoints.down(theme.xl)]: {
      display: "block",
      textAlign: "center",
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
      lineHeight: "30px",
      color: "#8B8B8B",
      maxWidth: "310px",
      margin: "0",
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
  textMainService: {
    color: "#FF64AE",
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: "125%",
    paddingBottom: "12px",
  },

  textAboutBold: {
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
  textChoosingBold: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "125%",
    maxWidth: "520px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "inherit",
      // paddingBottom: "20px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      paddingBottom: "0",
    },
  },

  textMainService: {
    color: "#FF64AE",
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: "125%",
    paddingBottom: "12px",
  },
  imgPlay: {
    padding: "50px 145px 0 0",
    height: "100%",
    cursor: "pointer",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 0 130px 0",
      maxWidth: "90%",
    },
  },

  bgTop: {
    backgroundImage: `url(${backgroundHome2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: "158px",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto 100%",
      marginBottom: "58px",
    },
  },
  textAbout: {
    color: "#FF64AE",
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: "125%",
    paddingBottom: "12px",
  },
  textAboutBlur: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "27px",
    letterSpacing: "0.1em",
    color: " #D8DCFF",
    maxWidth: "490px",
    paddingBottom: "35px",
    [theme.breakpoints.down(theme.sm)]: {
      maxWidth: "initial",
    },
  },
  textChoosingBlur: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "27px",
    letterSpacing: "0.1em",
    color: " #D8DCFF",
    maxWidth: "460px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "initial",
      paddingBottom: "35px",
    },
  },
  textAboutBlurGray: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "27px",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    maxWidth: "487px",
    paddingBottom: "35px",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "90%",
      margin: "0 auto",
    },
  },
  textAboutBoldblue: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "125%",
    maxWidth: "590px",
    paddingBottom: "10px",
    color: "#091156",
    [theme.breakpoints.down(theme.xl)]: {
      maxWidth: "initial",
      textAlign: "center",
    },
  },
  doubleButton: {
    "& .buttonPinkLearn": {
      margin: "0 44px 0 0",
      padding: "0",
      display: "flex",
      width: "200px",
      height: "58.36px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF64AE",
      color: "#fff",
      borderRadius: "50px",
      display: "inline-block",
      [theme.breakpoints.down(theme.xl)]: {
        margin: "0",
        width: "90%",
      },
    },
  },
  flexAboutChild: {
    "& .moreDetail": {
      width: "179px",
      height: "52px",
      border: "1px solid #FFFFFF",
      borderRadius: "15px",
      backgroundColor: "#ffffff00",
      color: "#FFFFFF",
      fontSize: "16px",
      fontFamily: "Poppins !important",
      fontWeight: "600",
      textTransform: "none !important",
      fontFamily: "Poppins !important",
      [theme.breakpoints.down(theme.sm)]: {
        width: "80%",
      },
    },
    [theme.breakpoints.down(theme.sm)]: {
      paddingBottom: "35px",
      textAlign: "center",
    },
  },

  wrapperTextProfess: {
    textAlign: "center",
    padding: "68px",
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
  wrapperBlog: {
    textAlign: "center",
    padding: "110px 0 80px 0",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 50px 50px 50px",
    },
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

  flexMainService: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 113px 128px",
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 0 128px 0",
    },
    [theme.breakpoints.down(theme.lg)]: {
      display: "block",
      padding: "0 0 68px 0",
    },
  },
  flexMainConsultation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "169px",
    [theme.breakpoints.down(theme.xl)]: {
      paddingBottom: "70px",
      display: "block",
    },
    "& .imgServiceItem": {
      width: "100%",
      paddingBottom: "56px  ",
    },
  },
  flexMainItem: {
    padding: "31px 37px 47px 36px",
    background: "#FFFFFF",
    border: "1px solid #E2E2E2",
    borderRadius: "25px",
    [theme.breakpoints.down(theme.xl)]: {
      width: "100%",
    },
    [theme.breakpoints.down(theme.lg)]: {
      textAlign: "center",
      marginBottom: "20px",
    },
    "& .textServiceBold": {
      color: "#091156",
      fontSize: "18px",
      fontFamily: "Poppins !important",
      fontWeight: "600",
      lineHeight: "37px",
    },
    "& .textServiceGray": {
      color: "#8B8B8B",
      fontSize: "14px",
      fontFamily: "Poppins !important",
      fontWeight: "400",
      maxWidth: "189px",
      paddingBottom: "17px",
      [theme.breakpoints.down(theme.lg)]: {
        maxWidth: "inherit",
      },
    },
    "& .flexTextMore": {
      display: "flex",
      "& .textMore": {
        color: "#FF64AE",
        fontSize: "14px",
        fontFamily: "Poppins !important",
        fontWeight: "600",
        paddingRight: "2px",
        cursor: "pointer",
      },
      [theme.breakpoints.down(theme.lg)]: {
        justifyContent: "center",
      },
    },
  },
  fexConsulation: {
    background: "#FFFFFF",
    borderRadius: "25px",
    boxShadow: " 0px 25px 50px 5px #F6F7FF",
    [theme.breakpoints.down(theme.xl)]: {
      margin: "0 0 40px 0",
      borderTopLeftRadius: "90px",
      borderTopRightRadius: "90px",
    },
    "& .textServiceBold": {
      color: "#091156",
      fontSize: "18px",
      fontFamily: "Poppins !important",
      fontWeight: "600",
      lineHeight: "29px",
      maxWidth: "288px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
        textAlign: "center",
      },
    },
    "& .textServiceGray": {
      color: "#8B8B8B",
      fontSize: "14px",
      fontFamily: "Poppins !important",
      fontWeight: "400",
      maxWidth: "220px",
      paddingBottom: "15px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
        textAlign: "center",
      },
    },
    "& .flexTextMore": {
      display: "flex",
      [theme.breakpoints.down(theme.xl)]: {
        justifyContent: "center",
      },
      "& .textMore": {
        color: "#FF64AE",
        fontSize: "14px",
        fontFamily: "Poppins !important",
        fontWeight: "600",
        paddingRight: "2px",
        cursor: "pointer",
      },
    },
    "& .padding38": {
      padding: "0 38px 72px",
    },
  },
  flexMainItemDb: {
    border: "1px solid #9BA2E0",
    [theme.breakpoints.down(theme.xl)]: {
      margin: "0 20px",
    },
    [theme.breakpoints.down(theme.lg)]: {
      margin: "0",
      marginBottom: "20px",
    },
  },
  bgService: {
    backgroundImage: `url(${ware})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 7%",
    [theme.breakpoints.down(theme.lg)]: {
      backgroundPositionY: "50%",
    },
  },
  infomation: {
    paddingLeft: "72px",
    display: "flex",
    [theme.breakpoints.down(theme.lg)]: {
      justifyContent: "center",
      padding: "0 12px 20px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      paddingBottom: "20px",
    },
  },
  imghandShake: {
    paddingRight: "11px",
  },
  blockInfo: {
    "& .textPink16": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: "125%",
      color: "#FF9ACB",
    },
  },
  advertiseChoosingTop: {
    display: "flex",
    paddingBottom: "48px",
    [theme.breakpoints.down(theme.xl)]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down(theme.xs)]: {
      paddingBottom: "0",
      display: "block",
    },
  },
  advertiseChoosingBottom: {
    display: "flex",
    [theme.breakpoints.down(theme.xl)]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down(theme.xs)]: {
      display: "block",
    },
  },
  Choosing: {
    padding: "277px 0 350px 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundImage: `url(${bgChoosing})`,
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto 100%",
    },
  },
  bgWaveRight: {
    backgroundImage: `url(${BackgroundWaveRight})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
  },
  fontItalic: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    float: "right",
    [theme.breakpoints.down(theme.xl)]: {
      float: "inherit",
    },
  },
  blockInsert: {
    position: "relative",
    width: "540px",
    marginBottom: "8px",
    [theme.breakpoints.down(theme.xl)]: {
      width: "96%",
      marginBottom: "20px",
      // position: "inherit",
    },
    "& .button": {
      position: "absolute",
      right: "0",
      height: "100%",
      backgroundColor: "#FF64AE",
      borderRadius: "0 25px 25px 0",

      "& img": {
        padding: "0 29px",
      },
      "&:hover": {
        backgroundColor: "#f52e8d",
      },
    },
    "& .input": {
      width: "90%",
      borderRadius: "25px",
      [theme.breakpoints.down(theme.sm)]: {
        position: "inherit",
        width: "100%",
      },
      "& label": {
        color: "#C5C5C5",
        fontFamily: "Poppins",
        fontSize: "16px",
      },
      "& fieldset": {
        border: "1px solid #D9DDFE",
        borderRadius: "25px",
        "& legend:focus": {
          padding: "0 10px",
        },
        "&:hover": {
          backgroundColor: "red",
          border: "1px solid #D9DDFE",
        },
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Home2 = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id="Home" className={classes.home}>
      <Box className={classes.bgTop}>
        <Box className={classes.wrapper}>
          <Box className={"wrapperHeader"}>
            <Box className={"wrapperHeaderChild"}>
              <Header handleClick={handleClickOpen} />
            </Box>

            <Box className={classes.flexAbout}>
              <Box className={classes.flexAboutChild}>
                <Typography className={classes.textAboutBold}>
                  Your beauty center place
                </Typography>
                <Typography className={classes.textAboutBlur}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo, massa pellentesque arcu fusce et magna consequat
                  neque vitae lobortis.
                </Typography>
                <Button className={"moreDetail"} variant="text">
                  More Details
                </Button>
              </Box>
              <img className={classes.imgPlay} src={playWhite} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={"wrapperHeaders"}>
        <Box className={classes.wrapper}>
          <Box className={classes.flex}>
            <img className={classes.imgPlay} src={Illustration} />
            <Box className={classes.flexsWithAbout}>
              <Box className={classes.doubleButton}>
                <Typography className={classes.textAbout}>About Us</Typography>
                <Typography className={classes.textAboutBoldblue}>
                  We are the best beauty clinic
                </Typography>
                <Typography className={classes.textAboutBlurGray}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                  quam suscipit purus donec amet. Egestas volutpat facilisi eu
                  libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                  tellus in suspendisse placerat.
                </Typography>
                <Button
                  className={"buttonPinkLearn"}
                  sx={buttonPink}
                  variant="text"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.wrapperTextProfess}>
        <Typography className={"textPink16"}>Main Services</Typography>
        <Typography className={"textBlueBold"}>Our focus services</Typography>
        <Typography className={"textGrey"}>
          Lorem ipsum dolor sit amet.
        </Typography>
      </Box>
      {/* all service */}
      <Box id="all service">
        <Box className={classes.bgService}>
          <Box className={classes.wrapper}>
            <Box className={classes.flexMainService}>
              <Box className={classes.flexMainItem}>
                <img className={"imgServiceItem"} src={icon2} />
                <Typography className={"textServiceBold"}>
                  Beauty consultation
                </Typography>
                <Typography className={"textServiceGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">Learn more</Typography>
                  <img src={more} />
                </Box>
              </Box>

              <Box
                className={`${classes.flexMainItem} ${classes.flexMainItemDb}`}
              >
                <img className={"imgServiceItem"} src={icon3} />
                <Typography className={"textServiceBold"}>
                  Beauty consultation
                </Typography>
                <Typography className={"textServiceGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">Learn more</Typography>
                  <img src={more} />
                </Box>
              </Box>

              <Box className={classes.flexMainItem}>
                <img className={"imgServiceItem"} src={icon4} />
                <Typography className={"textServiceBold"}>
                  Beauty consultation
                </Typography>
                <Typography className={"textServiceGray"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Typography>
                <Box className="flexTextMore">
                  <Typography className="textMore">Learn more</Typography>
                  <img src={more} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box id="wave right" className={classes.bgWaveRight}>
            <Box className={classes.Choosing} id="why choosing us ?">
              <Box className={classes.wrapper}>
                <Box className={classes.advertise}>
                  <Box>
                    <Typography className={classes.textChoosingBold}>
                      Why choosing us?
                    </Typography>
                    <Typography className={classes.textChoosingBlur}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis.
                    </Typography>
                  </Box>
                  <Box>
                    <Box id="top" className={classes.advertiseChoosingTop}>
                      <Box className={classes.infomation}>
                        <img className={classes.imghandShake} src={handShake} />
                        <Box className={classes.blockInfo}>
                          <Typography className={classes.textChoosingBold}>
                            100%
                          </Typography>
                          <Typography className={"textPink16"}>
                            trusted clinic
                          </Typography>
                        </Box>
                      </Box>

                      <Box className={classes.infomation}>
                        <img
                          className={classes.imghandShake}
                          src={brotherhood1}
                        />
                        <Box className={classes.blockInfo}>
                          <Typography className={classes.textChoosingBold}>
                            100%
                          </Typography>
                          <Typography className={"textPink16"}>
                            trusted clinic
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      id="bottom"
                      className={classes.advertiseChoosingBottom}
                    >
                      <Box className={classes.infomation}>
                        <img className={classes.imghandShake} src={earth1} />
                        <Box className={classes.blockInfo}>
                          <Typography className={classes.textChoosingBold}>
                            100%
                          </Typography>
                          <Typography className={"textPink16"}>
                            trusted clinic
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.infomation}>
                        <img className={classes.imghandShake} src={doctor1} />
                        <Box className={classes.blockInfo}>
                          <Typography className={classes.textChoosingBold}>
                            100%
                          </Typography>
                          <Typography className={"textPink16"}>
                            trusted clinic
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.wrapperBlog}>
              <Typography className={"textPink16"}>The Blog</Typography>
              <Typography className={"textBlueBold"}>
                Our latest news
              </Typography>
              <Typography className={"textGrey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>

            <Box className={classes.wrapper}>
              <Box className={classes.flexMainConsultation}>
                <Box className={classes.fexConsulation}>
                  <img className={"imgServiceItem"} src={introduce1} />
                  <Box className="padding38">
                    <Typography className={"textServiceBold"}>
                      How much does a consultation cost at our clinic?
                    </Typography>
                    <Typography className={"textServiceGray"}>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings ...
                    </Typography>
                    <Box className="flexTextMore">
                      <Typography className="textMore">Learn more</Typography>
                      <img src={more} />
                    </Box>
                  </Box>
                </Box>

                <Box className={`${classes.fexConsulation}`}>
                  <img className={"imgServiceItem"} src={introduce2} />
                  <Box className="padding38">
                    <Typography className={"textServiceBold"}>
                      Watch out! don't choose the wrong beauty product
                    </Typography>
                    <Typography className={"textServiceGray"}>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings ...
                    </Typography>
                    <Box className="flexTextMore">
                      <Typography className="textMore">Learn more</Typography>
                      <img src={more} />
                    </Box>
                  </Box>
                </Box>

                <Box className={classes.fexConsulation}>
                  <img className={"imgServiceItem"} src={introduce3} />
                  <Box className="padding38">
                    <Typography className={"textServiceBold"}>
                      About skin care you need to know
                    </Typography>
                    <Typography className={"textServiceGray"}>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings ...
                    </Typography>
                    <Box className="flexTextMore">
                      <Typography className="textMore">Learn more</Typography>
                      <img src={more} />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.flexRequest}>
                <Box>
                  <Typography className="textBlueBold">
                    Request call services
                  </Typography>
                  <p className="textGrey">
                    Lorem ipsum dolor sit amet, consect adipiscing elit{" "}
                    <span className="contactBold">Contact Us.</span>
                  </p>
                </Box>
                <Box>
                  <Box id="hihi" className={classes.blockInsert}>
                    <TextField
                      id="outlined-basic"
                      label="Insert your phone number here ..."
                      variant="outlined"
                      className="input"
                    />
                    <Button className="button">
                      <img src={iconPhone} />
                    </Button>
                  </Box>
                  <Typography className={classes.fontItalic}>
                    Toll free for our coverage areas.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <h2>Width: {windowSize.innerWidth}</h2> */}
      <Footer />
      <Scroll />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <BlockNew />
      </Dialog>
    </Box>
  );
};

export default Home2;
