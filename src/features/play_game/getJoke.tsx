import React, { useState } from "react";
const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    "x-rapidapi-key": "0a7f4833cbmsh2f0b5830d75906cp139c13jsn1f5b58949590",
  },
};

function GetJoke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function getJokeFromApi() {
    setLoading(true);

    axios.request(options).then((res: any) => {
      setLoading(false);
      const jokeString = `${res.data.body[0].setup} ${res.data.body[0].punchline}`;
      setJoke(jokeString);
    });
  }
  return (
    <div>
      <button onClick={() => getJokeFromApi()}>Get Joke</button>
      {loading ? "Loading Joke" : joke}
    </div>
  );
}

export default GetJoke;
