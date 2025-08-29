import React, { useState } from "react";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  if (!items || items.length === 0) return null;

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  const current = items[index];

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={handlePrev} disabled={index === 0}>
        ‹
      </button>
      <div className="carousel-track">
        <div className="carousel-item">
          <div>Order: {current.orderNumber}</div>
          <div>Type: {current.jobType}</div>
          <div>Status: {current.status}</div>
        </div>
      </div>
      <button className="carousel-btn" onClick={handleNext} disabled={index === items.length - 1}>
        ›
      </button>
    </div>
  );
}
