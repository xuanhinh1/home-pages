import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import bgPink from "../../images/logoBlue/Ellipse BG.svg";
import dotBig from "../../images/logoBlue/Ellipse White 1.svg";
import dotSmall from "../../images/logoBlue/Ellipse White 2.svg";
import recTangBlue from "../../images/icon footer/RectangleWhite.svg";
import arrowOption from "../../images/Vector.svg";
import facebook from "../../images/icon footer/facebook-f.svg";
import youtobeImg from "../../images/icon footer/youtube.svg";
import insta from "../../images/icon footer/instagram.svg";
import linkImg from "../../images/icon footer/linkedin-in.svg";
import twitter from "../../images/icon footer/twitter.svg";
import bgTop from "../../images/footer/footerBG.svg";
import bgBottom from "../../images/footer/bottomBG.svg";
import styles from "./style.module.css";

const useStyles = makeStyles((theme) => ({
  wrap: {
    backgroundImage: `url(${bgBottom}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: " 0 100%",
    [theme.breakpoints.down(theme.xl)]: {
      backgroundSize: "auto 60%",
    },
  },
  wrapper: {
    [theme.breakpoints.down(theme.xl)]: {
      padding: "237px 34px 93px",
      backgroundSize: "auto 100%",
    },
    [theme.breakpoints.down(theme.lg)]: {
      padding: "237px 20px 93px",
    },
    backgroundImage: `url(${bgTop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    padding: "237px 150px 0",
    "& .textLogo": {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "36.8px ",
      letterSpacing: "0.1em",
      color: "#FFFFFF",
      fontFamily: "Poppins",
    },
    "& .wrapBlock": {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "154px",
      [theme.breakpoints.down(theme.md)]: {
        display: "block",
        paddingBottom: "54px",
      },
    },
  },

  block1: {
    [theme.breakpoints.down(theme.md)]: {
      paddingBottom: "38px",
    },
    [theme.breakpoints.down(theme.xs)]: {
      paddingBottom: "0",
    },
    "& .wrapLogo": {
      display: "flex",
      alignItems: "center",
      paddingBottom: "33px",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "center",
      },
    },
    "& .textBoldSmall": {
      color: "#D7DBFF",
      fontFamily: "Poppins",
      lineHeight: "21px ",
      letterSpacing: "0.1em",
      paddingBottom: "26px",
      marginLeft: "27px",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "center",
        marginLeft: 0,
        display: "flex",
        alignItems: "center",
      },
      [theme.breakpoints.down(theme.xs)]: {
        textAlign: "center",
      },

      "& .textBold": {
        fontSize: "16px",
        fontWeight: "700",
        margin: "0",
        "& .textBlur": {
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
    "& .wrapItalicized, & .italicized": {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "24px ",
      letterSpacing: "0.1em",
      color: "#D7DBFF",
      fontFamily: "Poppins",
      fontStyle: "italic",
      display: "flex",
      [theme.breakpoints.down(theme.md)]: {
        justifyContent: "center",
      },
      [theme.breakpoints.down(theme.xs)]: {
        textAlign: "center",
        margin: "0 auto 20px",
      },
      "& .italicizedEmail": {
        textDecorationLine: "underline",
      },
    },
    "& .wrapItalicized": {
      [theme.breakpoints.down(theme.xs)]: {
        display: "block",
        textAlign: "center",
      },
    },
    "& .italicized": {
      margin: "0 53px 0 31px",
    },
  },
  block2: {
    paddingBottom: "20px",
    [theme.breakpoints.down(theme.md)]: {
      "text-align": "center",
    },
    "& .textBoldWhite": {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "27px ",
      letterSpacing: "0.1em",
      color: "#FFFFFF",
      fontFamily: "Poppins",
      paddingBottom: "24px",
    },
    "& .ImgPadd": {
      padding: "0 12.66px 0 4.07px",
    },
    "& .textSmall": {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "24px ",
      letterSpacing: "0.1em",
      color: "#D7DBFF",
      fontFamily: "Poppins",
      paddingBottom: "11px",
    },
  },
  blockAddress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.md)]: {
      display: "block",
    },
    "& .textAddress": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px ",
      letterSpacing: "0.1em",
      color: "#D7DBFF",
      fontFamily: "Poppins",
      [theme.breakpoints.down(theme.md)]: {
        textAlign: "center",
      },
    },
  },
  listIcon: {
    [theme.breakpoints.down(theme.md)]: {
      textAlign: "center",
    },
    "& .imageIon": {
      height: "70px",
      width: "70px",
      marginRight: "15px",
      cursor: "pointer",
      borderRadius: "50%",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <Box className={classes.wrapper}>
        <Box className={"wrapBlock"}>
          <Box className={classes.block1}>
            <Box className={"wrapLogo"}>
              <Box className={styles.logoFull}>
                <img className={styles.bgPink} src={bgPink} />
                <img className={styles.dotBig} src={dotBig} />
                <img className={styles.dotSmall} src={dotSmall} />
                <img className={styles.recTangBlue} src={recTangBlue} />
              </Box>
              <Typography className="textLogo">Beautice</Typography>
            </Box>
            <Typography className="textBoldSmall">
              <p className="textBold">
                Beautice{" "}
                <span class="textBlur">
                  is a Beauty Clinic WordPress Theme.
                </span>
              </p>
            </Typography>
            <Typography className={"italicized"}>
              Baker Steet 101, NY, United States.
            </Typography>
            <Box className={"wrapItalicized"}>
              <Typography className={"italicized"}>+521 569 8966.</Typography>
              <Typography className="italicizedEmail">
                mail@company.com.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.block2}>
            <Typography className="textBoldWhite">Page</Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Home
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              About
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Services
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Gallery
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Team
            </Typography>
          </Box>
          <Box className={classes.block2}>
            <Typography className="textBoldWhite">Informations</Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Terms & conditions
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Privacy policy
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Blog
            </Typography>
            <Typography className="textSmall">
              <img className="ImgPadd" src={arrowOption} />
              Contact
            </Typography>
          </Box>
        </Box>

        <Box className={classes.blockAddress}>
          <Box className={classes.listIcon}>
            <Button className="imageIon">
              <img src={facebook} />
            </Button>
            <Button className="imageIon">
              <img src={twitter} />
            </Button>
            <Button className="imageIon">
              <img src={linkImg} />
            </Button>
            <Button className="imageIon">
              <img src={youtobeImg} />
            </Button>
            <Button className="imageIon">
              <img src={insta} />
            </Button>
          </Box>
          <Typography className="textAddress">
            © AltDesain Studio 2021 - All right reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
