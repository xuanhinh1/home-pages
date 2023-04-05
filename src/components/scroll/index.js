import * as React from "react";
import { Box } from "@mui/material";
import toTop from "../../images/toTop.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toTop: {
    position: "fixed",
    bottom: "170px",
    right: "65px",
    cursor: "pointer",
  },
}));

const Scroll = () => {
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box>
      <a onClick={scrollToTop}>
        <img src={toTop} className={classes.toTop} />
      </a>
    </Box>
  );
};

export default Scroll;
