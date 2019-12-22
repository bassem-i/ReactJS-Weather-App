import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    "& img": {
      width: "100%",
      height: "100vh"
    }
  },
  splashOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)"
  },
  splashContent: {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    "& h1": {
      color: "white",
      fontSize: "7rem"
    }
  }
}));

const Header = ({ text }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img src={require("../../assets/header.jpg")} alt="header"></img>
      <div className={classes.splashOverlay}></div>
      <div className={classes.splashContent}>
        <h1>{text}</h1>
      </div>
    </header>
  );
};

export default Header;
