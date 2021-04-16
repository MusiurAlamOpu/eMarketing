import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import stars from "./stars.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
    height: 250
  },
});
const Reveiws = (props) => {
  const classes = useStyles();
  console.log(props.user);
  const {name, description, imageUrl, rating } = props.user;
  return (
    <Card
      style={{ borderRadius: "10px", margin: "1%"}}
      className={classes.root}
    >
      <CardActionArea>
        <CardContent>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100px', padding: '1%', width: '98%'}}>
                <div style={{width: '40%'}}>
                    <img style={{width: '70px', borderRadius: '50%'}} src={imageUrl} alt=""></img>
                </div>
                <div style={{width: '50%', marginLeft: '10%'}}>
                <p style={{fontSize: '20px', color:'#fb8c00'}}>{name}</p>
                </div>
            </div>
          
          <Typography style={{color: 'grey', height: '70px'}} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '30px'}}>
            
            <div style={{fontSize: '40px', color: '#fb8c00', fontWeight: '800'}}>
                {rating}
            </div>
            <div>
                <img style={{ width: "30px" }} src={stars} alt=""></img>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Reveiws;
