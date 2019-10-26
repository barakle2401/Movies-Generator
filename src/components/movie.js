/*

movie component - get the movie to display by props and fetch the specific movie data from the api 
*/

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./movie.css";
import axios from "axios";
const API_KEY = "7b773725";

function Movie(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${props.imdbID}&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        setData(res);
      });
  });

  if (data == null) {
    return null;
  } else {
    let screen_size = "18rem";

    if (window.innerWidth < 500) {
      screen_size = " ";
    }
    return (
      <Card border="info" style={{ width: screen_size }} bg="dark" text="white">
        <Card.Title style={{ color: "black", textAlign: "center" }}>
          <h3>{data.Title}</h3>
        </Card.Title>
        <Card.Img variant="top" src={data.Poster} />
        <Card.Body>
          <Card.Title>
            <h4>Rating: {data.imdbRating} / 10</h4>
          </Card.Title>
          <Card.Text>{data.Plot && data.Plot.substr(0, 400)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <span style={{ color: "white" }}>{"Genres:"}</span>
            <br />
            {data.Genre &&
              data.Genre.split(", ").map(g => (
                <span>
                  {g}
                  <br />
                </span>
              ))}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}
export default Movie;
