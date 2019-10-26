/*
Movie Generator - responsive web app  
developed in react js with react hooks and bootstrap 
- the app render a form and initial movies 
- fetching the required data of the input from OMDB api 
- render and display with bootstrap design

created by Barak Levy 26/10/19
hosting and deploy by firebase 
*/

/*IMPORTS - BOOTSTRAP, REACT.JS */
import React, { useState, useEffect } from "react";
import "./main_page.css";
import Movie from "./movie";
import NavBar from "./nav_bar";
import { Form, Card, CardDeck, CardColumns } from "react-bootstrap";
const API_KEY = "7b773725";

//define and initial the hooks
function MainPage() {
  const [data, setData] = useState(null);
  const [movie_name, setMovieName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [q, setQuery] = useState("joker");

  //fetch the initial data from the api
  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${q}&plot=full`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
          console.log(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [q]);

  const handle_submit = event => {
    if (event) {
      event.preventDefault();
      setQuery(movie_name);
    }
  };
  const handleInputChange = event => {
    event.persist();
    setMovieName(event.target.value);
  };
  if (loading) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <div>
        <NavBar />
        <div className="body">
          <Form onSubmit={handle_submit}>
            <Form.Control
              size="lg"
              onChange={handleInputChange}
              value={movie_name}
              type="text"
              placeholder="Enter a movie"
            />
          </Form>

          <CardColumns>
            {data !== null &&
              data.length > 0 &&
              data.map((result, index) => <Movie imdbID={result.imdbID} />)}
          </CardColumns>
        </div>
      </div>
    </>
  );
}
export default MainPage;
