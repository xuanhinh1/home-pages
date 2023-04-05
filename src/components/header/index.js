import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import bgPink from "../../images/logoBlue/Ellipse BG.svg";
import dotBig from "../../images/logoBlue/Ellipse White 1.svg";
import dotSmall from "../../images/logoBlue/Ellipse White 2.svg";
import recTangBlue from "../../images/logoBlue/Rectangle Blue.svg";
import { makeStyles } from "@material-ui/core";
import DehazeIcon from "@mui/icons-material/Dehaze";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const buttonPink = {
  ":hover": {
    bgcolor: "#f52e8d",
  },
  padding: 0,
  display: "inline-block",
  width: "161.6px",
  height: "52px",
  bgcolor: "#FF64AE",
  color: "#fff",
  marginLeft: "53.19px",
  borderRadius: "50px",
  fontFamily: "Poppins !important",
};

const useStyles = makeStyles((theme) => ({
  optionBars: {
    display: "none",
    [theme.breakpoints.down(theme.xl)]: {
      display: "flex",
    },
  },
  listSelectAndBt: {
    display: "flex",
    alignItems: "center",
    "& .listOption": {
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down(theme.xl)]: {
      display: "none",
    },
  },
  optionSelect: {
    "& .check": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
      margin: "0 0 0 48.07px",
      cursor: "pointer",
      "& .link": {
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#8B8B8B",
        cursor: "pointer",
        textTransform: "capitalize",
        fontFamily: "Poppins",
      },
      "& .linkBold": {
        textDecoration: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#414880",
        fontFamily: "Poppins",
        margin: "0",
      },
    },
  },

  textOptionPlus: {
    "& .check": {
      "& .link": {
        textDecoration: "none",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        color: "#414880",
        fontFamily: "Poppins",
        margin: "0",
      },
    },
  },
  header: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .textHeader": {
      textDecoration: "none",
      "& .check": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "& .textLogo": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "36.8px ",
          letterSpacing: "0.1em",
          color: "#091156",
          fontFamily: "Poppins",
        },
      },
    },
  },
}));

const Header = (props) => {
  const handleClick = () => {
    props.handleClick();
  };

  const classes = useStyles();
  return (
    <div>
      <Box className={classes.header}>
        <Link to={"/"} className={"textHeader"}>
          <Box className={"check"}>
            <Box className={styles.logoFull}>
              <img className={styles.bgPink} src={bgPink} />
              <img className={styles.dotBig} src={dotBig} />
              <img className={styles.dotSmall} src={dotSmall} />
              <img className={styles.recTangBlue} src={recTangBlue} />
            </Box>
            <Typography className="textLogo">Beautice</Typography>
          </Box>
        </Link>
        <Box className={classes.listSelectAndBt}>
          <Box className={"listOption"}>
            <Box className={classes.optionSelect}>
              <Typography className={"check"}>
                <Link className={"linkBold"} to={"/home2"}>
                  Home +
                </Link>
              </Typography>
            </Box>
            <Box className={classes.optionSelect}>
              <Typography className={"check"}>
                <Link className={"link"} to={"/about"}>
                  About
                </Link>
              </Typography>
            </Box>

            <Box className={classes.optionSelect}>
              <Typography className={"check"}>
                <Link className={"link"} to={"/service"}>
                  Service
                </Link>
              </Typography>
            </Box>

            <Box className={classes.optionSelect}>
              <Typography className={"check"}>
                <Link className={"link"} to={"/gallery"}>
                  Gallery
                </Link>
              </Typography>
            </Box>

            <Box className={classes.optionSelect}>
              <Typography className={"check"}>Blog</Typography>
            </Box>
          </Box>
          <Button sx={buttonPink} variant="text">
            Contact
          </Button>
        </Box>
        <Box onClick={handleClick} className={classes.optionBars}>
          <Button
            variant="contained"
            className={"check"}
            sx={{
              ":hover": {
                bgcolor: "#f52e8d",
              },
              width: "50px",
              height: "50px",
              backgroundColor: "#FF64AE",
            }}
          >
            <DehazeIcon />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
