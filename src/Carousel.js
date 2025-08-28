import React, { useState, useEffect } from "react";

function Carousel({ events, interval = 1000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered || events.length <= 1) return;

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, interval);

    return () => clearTimeout(timeout);
  }, [currentIndex, hovered, events, interval]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % events.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

  const currentJob = events[currentIndex];

  return (
    <div
      className="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="carousel-btn" onClick={handlePrev}>‹</button>
      <div className="carousel-track">
        <div className="carousel-item">
          {currentJob.jobType}-{currentJob.orderNumber}-{currentJob.status}
        </div>
      </div>
      <button className="carousel-btn" onClick={handleNext}>›</button>
    </div>
  );
}

export default Carousel;
