import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import musicTracks from "../data/musicTracks.json"; // Import the JSON file

export default function MusicPlayer() {
  const defaultTrack = musicTracks[0].url; // Fallback track
  const [selectedTrack, setSelectedTrack] = useState(defaultTrack);
  const [error, setError] = useState(null);

  // Handle track selection
  const handleTrackChange = (event) => {
    setSelectedTrack(event.target.value);
    setError(null); // Reset error on new selection
  };

  // Handle iframe errors (e.g., video unavailable)
  const handleIframeError = () => {
    setError("Video không khả dụng. Đang chuyển sang bài nhạc mặc định...");
    setSelectedTrack(defaultTrack);
  };

  // Reset error when track changes successfully
  useEffect(() => {
    setError(null);
  }, [selectedTrack]);

  return (
    <div className="my-4 text-center">
      <h4>
        <FontAwesomeIcon icon={faMusic} className="me-2" />
        Thư giãn với âm nhạc
      </h4>
      <select
        className="mb-3 p-2 border rounded w-full max-w-md mx-auto"
        onChange={handleTrackChange}
        value={selectedTrack}
      >
        {musicTracks.map((track) => (
          <option key={track.id} value={track.url}>
            {track.title}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <iframe
        width="100%"
        height="200"
        src={selectedTrack}
        title="Relaxing Music"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
        onError={handleIframeError}
      ></iframe>
    </div>
  );
}
