import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EpisodesList from "./pages/EpisodesList";
import CharactersList from "./pages/CharactersList";
import Home from "./pages/Home";

// - adjust search bar with magnifying glass icon
// - add the Rick & Morty API

function App() {
  let component;
  switch (window.location.pathname) {
    case "/characters":
      component = <CharactersList />;
      break;
    case "/episodes":
      component = <EpisodesList />;
      break;
    default:
      component = <Home />;
  }
  return (
    <>
      <Navbar expand="sm" className="navbar">
        <Container>
          <Navbar.Brand href="/home">Coding Challenge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/episodes">Episodes</Nav.Link>
              <Nav.Link href="/characters">Characters</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <input type="text" className="search-bar" placeholder="Search..."></input>
      </Navbar>

      {component}
    </>
  );
}

export default App;
