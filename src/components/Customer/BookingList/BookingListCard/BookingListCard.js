import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 180,
  },
  media: {
    height: 170,
  },
});

const BookingListCard = (props) => {
  const classes = useStyles();
  const [services, setServices] = useState([]);
  const { name, email, service, date, _id } = props.booking;
  const bookingInfo = {
    _id: _id,
    name: name,
    email: email,
    service: service,
    date: date,
    imageURL: "hello",
  };

  useEffect(() => {
    fetch("https://fast-tor-66437.herokuapp.com/addService")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  for (let i = 0; i < Object.size(services); i++) {
    if (services[i].title === bookingInfo.service) {
      bookingInfo.imageURL = services[i].imageURL;
    }
  }
  const [deleteClicked, setDeleteClicked] = useState(false);
  const deleteBooking = (props) => {
    console.log(props);
    let url = `https://fast-tor-66437.herokuapp.com/deleteBooking/${props}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Logo deleted Successfully!");
      });
    setDeleteClicked(true);
  };
  return (
    <div>
      {deleteClicked ? (
        <div sytle={{display: 'none'}}></div>
      ) : (
        <Card
          id="projectCard"
          style={{ borderRadius: "10px", margin: "10px" }}
          className={classes.root}
        >
          <CardMedia
            className={classes.media}
            image={bookingInfo.imageURL}
            title="Mello"
          />
          <CardActionArea>
            <CardContent>
              <span style={{ color: "Skyblue" }}>{service}</span>
              <div style={{ height: "60px" }}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {name}
                  <br />
                  {email}
                  <br />
                  {date}
                </Typography>
              </div>
            </CardContent>
            <div>
              <Button onClick={() => deleteBooking(_id)}>DELETE</Button>
            </div>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default BookingListCard;

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
