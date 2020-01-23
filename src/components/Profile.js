import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, Button, Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";


const styles = {
  paper: {
    padding: 20
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
};

export class Profile extends Component {
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading
      }
    } = this.props;

    let profileMarkup = !loading ? (authenticated ? (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="profile-image">
                    <img src={imageUrl} alt="profile" />
                </div>
                <hr/>
                <div className={profileDetails}>
                <MuiLink component={Link} to ={`/users/${handle}`} color="primary" varient="h5">
                    @{handle}
                </MuiLink>
                <hr/>
                {bio && <Typography variant="body2">{bio}</Typography>}
                <hr />
                {location && (
                    LocationOn color="primary />"
                )}
                </div>
            </div>
        </Paper>
    ) : ()) : (<p>loading...</p>)

    return profileMarkup;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

Profile.PropTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
