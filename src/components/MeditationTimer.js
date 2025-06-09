import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faPlayCircle,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function MeditationTimer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (active) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="text-center my-4">
      <h5>
        <FontAwesomeIcon icon={faHourglassHalf} className="me-2" />
        Thời gian thiền: {seconds}s
      </h5>
      <Button
        variant="primary"
        onClick={() => setActive(!active)}
        className="me-2"
      >
        <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
        {active ? "Tạm dừng" : "Bắt đầu"}
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          setSeconds(0);
          setActive(false);
        }}
      >
        <FontAwesomeIcon icon={faRedoAlt} className="me-2" />
        Đặt lại
      </Button>
    </div>
  );
}
