import React from "react";
import Carousel from "./Carousel";

const systemColors = {
  COURMAN: "#273c75",
  COS: "#44bd32",
  CMAS: "#e1b12c"
};

function Grid({ timeline, systems, eventsData }) {
  return (
    <div className="grid-table">
      {/* Cabeçalho */}
      <div className="grid-cell header-cell">Sistema / Horário</div>
      {timeline.map(time => (
        <div key={time} className="grid-cell header-cell">{time}</div>
      ))}

      {/* Linhas de sistemas */}
      {systems.map(system => (
        <>
          {/* Nome do sistema */}
          <div
            key={system + "-name"}
            className="grid-cell system-cell"
            style={{backgroundColor: systemColors[system]}}
          >
            {system}
          </div>

          {/* Células de eventos */}
          {timeline.map(time => {
            const events = eventsData[system][time] || [];
            const jobs = events.flatMap(e => e.jobOffers || []);

            if (jobs.length === 0) {
              return <div key={system+time} className="grid-cell event-cell"></div>;
            }

            return (
              <div key={system+time} className="grid-cell event-cell">
                <Carousel events={jobs} interval={800} />
              </div>
            );
          })}
        </>
      ))}
    </div>
  );
}

export default Grid;
