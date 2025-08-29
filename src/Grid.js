import React from "react";
import Carousel from "./Carousel";

export default function Grid({ timeline, systems, eventsData }) {
  return (
    <div
      className="grid-table"
      style={{
        gridTemplateColumns: `150px repeat(${timeline.length}, 180px)`
      }}
    >
      {/* Cabeçalho */}
      <div className="header-cell">System / Time</div>
      {timeline.map((time) => (
        <div key={time} className="header-cell">{time}</div>
      ))}

      {/* Linhas por sistema */}
      {systems.map((system) => (
        <React.Fragment key={system}>
          <div className="system-cell">{system}</div>
          {timeline.map((time) => {
            const cellEvents = eventsData[system][time] || [];
            // Junta todos os jobOffers da célula em um único array
            const jobs = cellEvents.flatMap(e => e.jobOffers || []);
            return (
              <div key={time + system} className="event-cell">
                {jobs.length > 0 ? (
                  <Carousel items={jobs} />
                ) : (
                  <div style={{ fontSize: "10px", color: "#999" }}>No Jobs</div>
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
