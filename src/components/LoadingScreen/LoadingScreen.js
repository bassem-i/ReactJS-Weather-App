import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    position: "relative",
    "& p": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Loading...</p>
    </div>
  );
};
