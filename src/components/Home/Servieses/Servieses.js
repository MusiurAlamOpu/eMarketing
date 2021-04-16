import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './ServiesCard.css';
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
  },
  media: {
    height: 200,
  },
});
const Servieses = (props) => {
  const classes = useStyles();
  const {price, id, title, description, imageUrl } = props.servies;
  return (
    <Card id="serviesCard" style={{borderRadius: '10px', margin: '2%', backgroundColor: '#f8fdff', border: 'none'}} className={classes.root}>
      <CardActionArea style={{backgroundColor: '#f8fdff', border: 'none'}}>
        <CardMedia style={{backgroundColor: '#f8fdff', border: 'none'}} className={classes.media} image={imageUrl} title={id} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{border: '1px solid #ffbc02', borderRadius: '5px', color: '#ffbc02', fontWeight: '600'}} size="small" color="primary">
          {price}$
        </Button>
        <Button style={{backgroundColor: '#ffbc02', borderRadius: '5px', color: 'black', fontWeight:'500', marginLeft: '65px'}} size="small" color="primary">
          ORDER
        </Button>
      </CardActions>
    </Card>
  );
};

export default Servieses;