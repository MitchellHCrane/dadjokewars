import Intro from "./features/intro/Intro"
import HowItWorks from './features/how_it_works/HowItWorks';
import GameSetup from './features/game_setup/GameSetup';
import PlayerNames from './features/game_setup/GameSetup';
import PlayGame from './features/play_game/PlayGame';
import './App.css';
import { 
  Routes,
  Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* <Header /> */}
      <Route path="/" element={<Intro />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/game-setup" element={<GameSetup />} />
      <Route path="/player-names" element={<PlayerNames />} />
      <Route path="/play-game" element={<PlayGame />} />
      {/* <Route path="/winner" element={Winner} /> */}
      {/* <Route path="/sudden-death-game-play" element={SuddenDeathGamePlay} /> */}
      {/* <Route path="/sudden-death" element={SuddenDeath /> */}
    </Routes>
  );
}

export default App;
