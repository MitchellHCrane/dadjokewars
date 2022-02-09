import { Link } from "react-router-dom";
import React, { useState } from "react";
const axios = require("axios").default;

// Get Joke from Api
function GetJoke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function getJokeFromApi() {
    setLoading(true);

    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res: any) => {
        setLoading(false);
        const jokeString = `${res.data.joke}`;
        setJoke(jokeString);
      });
  }

  //API with Adult jokes
  //   function getJokeFromApi() {
  //     setLoading(true);

  //     axios
  //       .get("https://dad-jokes.p.rapidapi.com/random/joke", {
  //         headers: {
  //           "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
  //           "x-rapidapi-key":
  //             "0a7f4833cbmsh2f0b5830d75906cp139c13jsn1f5b58949590",
  //         },
  //       })
  //       .then((res: any) => {
  //         setLoading(false);
  //         const jokeString = `${res.data.body[0].setup}. ${res.data.body[0].punchline}`;
  //         setJoke(jokeString);
  //       });
  //   }

  return (
    <>
      <p>{loading ? "Loading Joke" : joke}</p>
      <Link to="">
        <button onClick={() => getJokeFromApi()} className="orangeBtn">
          Next Player
        </button>
      </Link>
    </>
  );
}

export default GetJoke;
