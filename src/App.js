import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import NavBar from "./NavBar";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function App() {
  const [restaurant, setrestaurant] = useState([]);
  const [images, setimages] = useState([]);
  const [{ basket }, dispatch] = useStateValue();

  useEffect(async () => {
    await axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
      )
      .then((data) => {
        console.log(data.data, "data  ");
        setrestaurant(data.data);
        dispatch({
          type: actionTypes.FILL_DATA,
          item: data.data,
        });
      });
  }, []);

  useEffect(async () => {
    await axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json"
      )
      .then((data) => {
        console.log(data.data, "images in");
        setimages(data.data);
      });
  }, []);

  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <Router>
        <NavBar></NavBar>
        <Route path="/" exact>
          <Restaurant data={restaurant} res_images={images}></Restaurant>
        </Route>
        <Route path="/:id" exact>
          <Details data={restaurant} res_images={images}></Details>
        </Route>
      </Router>
    </div>
  );
}

export default App;
