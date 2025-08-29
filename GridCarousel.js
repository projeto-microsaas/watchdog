import React, { useState } from "react";
import Grid from "./Grid";

function GridCarousel({ timeline, systems, eventsData, pageSize = 6 }) {
  const totalPages = Math.ceil(timeline.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const currentTimeline = timeline.slice(startIndex, endIndex);

  return (
    <div className="grid-carousel-wrapper">
      <button className="carousel-btn" onClick={handlePrev}>‹</button>
      <div className="grid-carousel">
        <Grid timeline={currentTimeline} systems={systems} eventsData={eventsData} />
      </div>
      <button className="carousel-btn" onClick={handleNext}>›</button>
    </div>
  );
}

export default GridCarousel;
