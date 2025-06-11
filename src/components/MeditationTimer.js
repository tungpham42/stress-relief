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

  // Convert seconds to HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center my-4">
      <h5>
        <FontAwesomeIcon icon={faHourglassHalf} className="me-2" />
        Thời gian thiền <code>{formatTime(seconds)}</code>
      </h5>
      <Button
        onClick={() => setActive(!active)}
        className="me-2 liquid-glass-button"
      >
        <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
        {active ? "Tạm dừng" : "Bắt đầu"}
      </Button>
      <Button
        className="liquid-glass-button"
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
