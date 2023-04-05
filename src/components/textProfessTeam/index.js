import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
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
}));

const TextProfessTeam = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={"textPink16"}>Professional Teams</Typography>
      <Typography className={"textBlueBold"}>
        The Professional expert
      </Typography>
      <Typography className={"textGrey"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Typography>
    </Box>
  );
};

export default TextProfessTeam;
