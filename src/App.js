import './App.css';
import EpisodesList from './pages/EpisodesList'
import CharactersList from './pages/CharactersList'


// first todos:
// 1. add top bar
// 2. add search bar
// 3. adjust search bar with magnifying glass	icon 
// 4. add 2 pages (for characters & episodes)
// 5. add routing (maybe put both pages as buttons on the left of the top bar?)
function App() {
  return (
    <>
      <EpisodesList />
      <CharactersList />
    </>
  );
}

export default App;
