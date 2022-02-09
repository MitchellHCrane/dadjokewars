import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./features/intro/Intro.css";
import "./features/header/header.css";
import "./features/game_setup/gameSetup.css";
import "./features/player_names/PlayerNames.css";
import "./features/play_game/PlayGame.css";
import "./features/game_over/game_over.css";

import LayoutWithHeader from "./features/layout/LayoutWithHeader";
import Intro from "./features/intro/Intro";
import HowItWorks from "./features/how_it_works/HowItWorks";
import GameSetup from "./features/game_setup/GameSetup";
import PlayerNames from "./features/player_names/PlayerNames";
import PlayGame from "./features/play_game/PlayGame";
import GameOver from "./features/game_over/GameOver";
import PageNotFound from "./features/not_found/NotFound";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route
            path="/how-it-works"
            element={
              <LayoutWithHeader>
                <HowItWorks />
              </LayoutWithHeader>
            }
          />
          <Route
            path="/game-setup"
            element={
              <LayoutWithHeader>
                <GameSetup />
              </LayoutWithHeader>
            }
          />
          <Route
            path="/player-names"
            element={
              <LayoutWithHeader>
                <PlayerNames />
              </LayoutWithHeader>
            }
          />
          <Route
            path="/play-game"
            element={
              <LayoutWithHeader>
                <PlayGame />
              </LayoutWithHeader>
            }
          />
          <Route path="/game-over" element={<GameOver />} />
          {/* <Route path="/sudden-death-game-play" element={SuddenDeathGamePlay} /> */}
          {/* <Route path="/sudden-death" element={SuddenDeath /> */}
          <Route
            path="/*"
            element={
              <LayoutWithHeader>
                <PageNotFound />
              </LayoutWithHeader>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
