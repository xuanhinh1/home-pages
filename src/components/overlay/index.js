import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#4d4d4d6e",
  },
}));

const Overlay = (props) => {
  const classes = useStyles();
  const handleclick = () => {
    props.handleClick();
  };
  return <Box onClick={handleclick} className={classes.wrapper}></Box>;
};

export default Overlay;
