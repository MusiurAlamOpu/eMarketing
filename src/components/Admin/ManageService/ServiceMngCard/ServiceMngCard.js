import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 210,
  },
  media: {
    height: 200,
  },
});

const ServiceMngCard = () => {
  const classes = useStyles();
  return (
    <Card
      id="projectCard"
      style={{ borderRadius: "10px", margin: "10px" }}
      className={classes.root}
    >
      <CardMedia className={classes.media} image="" title="Mello" />
      <CardActionArea>
        <CardContent>
          <div style={{ height: "120px" }}>
            <Typography
              style={{ color: "Skyblue" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Hellokajsfkl
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              kellokasjf;lka
            </Typography>
          </div>
          <CardActions>
          <Button
              style={{
                border: "1px solid red",
                backgroundColor: "#EBC1BE",
                color: "red",
              }}
              type="submit"
            >
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceMngCard;


// export default ServiceMngCard;