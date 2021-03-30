import React from "react";
import { useHistory, useParams } from "react-router";
import "./Details.css";
function Details({ data, res_images }) {
  let history = useHistory();
  let { id } = useParams();
  return (
    <div className="details">
      <div class="details__container">
        {console.log(data, "in details")}
        <img src={res_images[id % res_images?.length]?.Image}></img>
        <div class="details_info">
          <h1> {data[id].Brand}</h1>
          <p>
            <span>Variety:</span> {data[id].Variety}
          </p>
          <p>
            <span>Style:</span>
            {data[id].Style}
          </p>
          <p>
            <span>Country:</span>
            {data[id].Country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
