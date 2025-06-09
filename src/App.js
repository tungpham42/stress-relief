import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import MusicPlayer from "./components/MusicPlayer";
import Quotes from "./components/Quotes";
import MeditationTimer from "./components/MeditationTimer";

function App() {
  return (
    <Container className="my-4">
      <h1 className="text-center">
        <FontAwesomeIcon icon={faLeaf} className="me-2" />
        Ứng dụng giảm căng thẳng
      </h1>
      <MusicPlayer />
      <Quotes />
      <MeditationTimer />
    </Container>
  );
}

export default App;
