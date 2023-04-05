import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "60%",
    backgroundColor: "#ffffff",
    "& .link": {
      textDecoration: "none",
      color: "#091156",
      "& .text": {
        padding: "10px 0 10px 10px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "700",

        "&:hover": {
          backgroundColor: "#f5f5fd",
          // color: "red",
        },
      },
    },
  },
}));

const BlockNew = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Link className="link" to={"/"}>
        <Typography className="text">Home +</Typography>
      </Link>
      <Link className="link" to={"/about"}>
        <Typography className="text">About</Typography>
      </Link>
      <Link className="link" to={"/service"}>
        <Typography className="text">Service</Typography>
      </Link>
      <Link className="link" to={"/gallery"}>
        <Typography className="text">Gallery</Typography>
      </Link>
      <Link className="link" to={"/blog"}>
        <Typography className="text">Blog</Typography>
      </Link>
      {/* <Typography className="text">Contact</Typography> */}
    </Box>
  );
};

export default BlockNew;
