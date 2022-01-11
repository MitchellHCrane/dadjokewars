import Header from "./features/header/Header";
import Intro from "./features/intro/Intro";
import HowItWorks from "./features/how_it_works/HowItWorks";
import GameSetup from "./features/game_setup/GameSetup";
import PlayerNames from "./features/player_names/PlayerNames";
import PlayGame from "./features/play_game/PlayGame";
import GameOver from "./features/game_over/GameOver";
import "./App.css";
import "./features/intro/Intro.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./features/not_found/NotFound";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <switch>
            <Route path="/" element={<Intro />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/game-setup" element={<GameSetup />} />
            <Route path="/player-names" element={<PlayerNames />} />
            <Route path="/play-game" element={<PlayGame />} />
            <Route path="/game-over" element={<GameOver />} />
            {/* <Route path="/sudden-death-game-play" element={SuddenDeathGamePlay} /> */}
            {/* <Route path="/sudden-death" element={SuddenDeath /> */}
            <Route component={PageNotFound} />
          </switch>
        </Routes>
      </Router>
    </>
  );
}

export default App;
