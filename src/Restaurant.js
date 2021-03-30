import React, { useEffect, useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Default.css";

import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Restaurant.css";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 10,
    margin: 20,
    width: "33%",
  },
  media: {
    height: 140,
  },
});

const useRatingStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

function Restaurant({ data, res_images }) {
  const classes = useStyles();
  const classes_rating = useRatingStyles();
  let length = res_images?.length;
  console.log(length, "length");
  const [mydata, setmydata] = useState([]);
  const [inputdata, setinputdata] = useState("");
  const [realdata, setrealdata] = useState([]);

  //   let imageId = "";
  //   const [images, setimages] = useState([]);

  useEffect(async () => {
    setmydata(data);
    setrealdata(data);
  }, [data]);

  const getindex = (id) => {
    console.log(res_images, "images");
    let length = res_images?.length;
    // let integer = Math.floor(Math.random() * length);
    let integer = id % res_images?.length;
    console.log(integer);
    // imageId = integer;
    return integer;
  };
  let sortByRatings = (data) => {
    data.sort((a, b) => (a.Rating > b.Rating ? 1 : -1));
    setmydata([...data]);
    console.log(mydata);
  };
  let sortByName = (data) => {
    data.sort((a, b) => (a.Brand > b.Brand ? 1 : -1));
    setmydata([...data]);
  };

  const serchByName = (e) => {
    console.log(e.target.value);
    let x = realdata.filter((x) =>
      x.Brand.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(x);
    setmydata([...x]);
  };

  return (
    <div className="restaurent ">
      {/* <NavBar></NavBar> */}
      <div class="filters">
        <input placeholder="seach here" onChange={serchByName}></input>
        <div class="filter__button">
          <button onClick={() => sortByRatings(mydata)}>Sort By Ratings</button>
          <button onClick={() => sortByName(mydata)}>Sort By Name</button>
        </div>
      </div>
      <div className="restaurent__container flex ">
        {mydata.map((item, id) => (
          //   <Link to={`/${id}`}>
          <Card className={classes.root} className="wrapper">
            <Link to={`/${id}`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  //   res_images[getindex()]?.Image
                  image={res_images[id % res_images?.length]?.Image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.Brand}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.Variety}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.Style}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.Country}
                  </Typography>
                  <div className={classes_rating.root}>
                    <Rating name="size-medium" defaultValue={item.Stars} />
                  </div>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
          //   </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
