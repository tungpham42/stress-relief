import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import quotes from "../data/quotes.json";

export default function Quotes() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleNewQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="text-center my-4">
      <blockquote className="p-4">
        <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />"{quote}"
      </blockquote>
      <Button onClick={handleNewQuote} className="liquid-glass-button">
        <FontAwesomeIcon icon={faSyncAlt} className="me-2" />
        Câu nói khác
      </Button>
    </div>
  );
}
