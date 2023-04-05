import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import imagePersion from "../../images/contact/contactPersion.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0 150px",
    display: "flex",
    justifyContent: "space-between",
    "& .textContact": {
      color: "#FF64AE",
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: "125%",
      paddingBottom: "12px",
    },
    "& .textBlueBold": {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: 36,
      lineHeight: "125%",
      color: "#091156",
      paddingBottom: "12px",
      maxWidth: "404px",
      [theme.breakpoints.down(theme.xl)]: {
        maxWidth: "inherit",
      },
    },
    "& .textGrey": {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: "24px",
      color: "#8B8B8B",
      paddingBottom: "44px",
    },

    "& .description": {
      width: "100%",
      height: "240px !important",
      padding: "25px 0 30px 24px",
      marginBottom: "54.84px",
      color: "#C5C5C5",
      background: "#FFFFFF",
      border: " 1px solid #D9DDFE",
      borderRadius: "15px",
      fontSize: "16px",
      outline: "none",
      "&::placeholder": {
        color: "#C5C5C5",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100%",
        marginBottom: "12px",
      },
    },
    "& .imgPersion": {
      height: "100%",
      [theme.breakpoints.down(theme.sm)]: {
        width: "100%",
      },
    },
    [theme.breakpoints.down(theme.xl)]: {
      padding: "0 34px",
      display: "block",
      textAlign: "center",
    },
  },
  flexDouble: {
    [theme.breakpoints.down(theme.xs)]: {
      display: "block",
      padding: 0,
    },
    display: "flex",
    justifyContent: "space-between",
    // paddingBottom: "38.32px",
    "& .inputChild": {
      borderRadius: "15px",
      background: "#FFFFFF",
      width: "45%",
      color: "#C5C5C5",
      "& fieldset": {
        borderRadius: "15px",
        border: " 1px solid #D9DDFE",
        outline: "none",
        borderColor: "#D9DDFE",
      },
      "& label": {
        color: "#C5C5C5",
        fontFamily: "Poppins",
        outline: "none",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100%",
        marginBottom: "12px",
      },
    },
  },
  inputDouble: {
    padding: "17px 84px 17px 24px",
  },
  wrapperForm: {
    "& .buttonPinkLearn": {
      fontFamily: "Poppins",
      margin: "0 44px 0 0",
      padding: "0",
      display: "flex",
      width: "248px",
      height: "58.36px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF64AE",
      color: "#fff",
      borderRadius: "50px",
      display: "inline-block",
      [theme.breakpoints.down(theme.xl)]: {
        width: "90%",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100%",
        margin: "0 0 12px 0",
      },
    },
    "& .inputChild": {
      marginBottom: "38.32px",
      background: "#FFFFFF",
      fontSize: "16px ",
      borderRadius: "15px",
      color: "#C5C5C5",
      "& label": {
        color: "#C5C5C5",
        outline: "none",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100%",
        marginBottom: "12px",
      },
      "& fieldset": {
        borderRadius: "15px",
        borderColor: "#D9DDFE",
        "& legend": {},
      },
    },
    "& .inputEmail": {
      marginBottom: "38.32px",
      background: "#FFFFFF",
      fontSize: "16px ",
      borderRadius: "15px",
      color: "#C5C5C5",
      "& label": {
        color: "#C5C5C5",
        outline: "none",
      },
      [theme.breakpoints.down(theme.xs)]: {
        width: "100%",
        marginBottom: "12px",
      },
      "& fieldset": {
        borderRadius: "15px",
        borderColor: "#D9DDFE",
        "& legend": {},
      },
    },
  },
}));
const ContactUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <img className={"imgPersion"} src={imagePersion} />
      <Box className={classes.wrapperForm}>
        <Typography className="textContact">Contact Us</Typography>
        <Typography className="textBlueBold">
          Send your inquiry to our expert team
        </Typography>
        <Typography className="textGrey">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </Typography>
        <Box className={classes.flexDouble}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className="inputChild"
          />
          <TextField
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            className="inputChild"
          />
        </Box>
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          fullWidth
          className="inputEmail"
        />
        <TextField
          id="outlined-basic"
          label="Subject message"
          variant="outlined"
          fullWidth
          className="inputEmail"
        />
        <TextareaAutosize
          placeholder="Your inquiry here"
          className="description"
          color="danger"
        />
        <Button
          className={"buttonPinkLearn"}
          sx={{
            ":hover": {
              backgroundColor: "#f52e8d",
            },
          }}
          variant="text"
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
