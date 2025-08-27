import React, { useState } from "react";

function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) {
    return <div className="carousel-empty">Nenhum item disponível</div>;
  }

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  const item = items[index];

  return (
    <div className="carousel">
      <button onClick={prev}>◀</button>
      <div className="carousel-item">
        <p><strong>Data:</strong> {item.date}</p>
        <p><strong>Job Type:</strong> {item.jobType}</p>
        <p><strong>Order #:</strong> {item.orderNumber}</p>
        <p><strong>Status:</strong> {item.status}</p>
      </div>
      <button onClick={next}>▶</button>
    </div>
  );
}

export default Carousel;
