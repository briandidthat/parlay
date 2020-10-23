import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";

const styles = {
    root: {
      flexGrow: 1,
      alignItems: "center"
    }
};

function GridContainer({...props}) {
    const { classes, children, className, ...rest } = props;

    return (
        <Grid container {...rest} className={classes.root + " " + className}>
            {children}
        </Grid>
    )
}

GridContainer.defaultProps = {
    className: ""
};

GridContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};


export default withStyles(styles)(GridContainer);