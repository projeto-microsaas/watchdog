import React from "react";
import Grid from "./Grid";
import "./Grid.css";

// 30 timestamps quebrados
const timeline = [
  "2025-07-26 05:12:35.708", "2025-07-26 05:25:12.123", "2025-07-26 05:40:48.567",
  "2025-07-26 06:05:10.234", "2025-07-26 06:20:30.001", "2025-07-26 06:35:50.456",
  "2025-07-26 06:50:15.789", "2025-07-26 07:05:05.321", "2025-07-26 07:20:45.654",
  "2025-07-26 07:35:30.987", "2025-07-26 07:50:10.111", "2025-07-26 08:05:55.222",
  "2025-07-26 08:20:40.333", "2025-07-26 08:35:25.444", "2025-07-26 08:50:10.555",
  "2025-07-26 09:05:05.666", "2025-07-26 09:20:50.777", "2025-07-26 09:35:35.888",
  "2025-07-26 09:50:20.999", "2025-07-26 10:05:10.111", "2025-07-26 10:20:55.222",
  "2025-07-26 10:35:40.333", "2025-07-26 10:50:25.444", "2025-07-26 11:05:10.555",
  "2025-07-26 11:20:05.666", "2025-07-26 11:35:50.777", "2025-07-26 11:50:35.888",
  "2025-07-26 12:05:20.999", "2025-07-26 12:20:05.111", "2025-07-26 12:35:50.222"
];

const systems = ["COURMAN", "COS", "CMAS"];

// Função para gerar jobs fake
const generateJobs = (count, startOrder = 637812100) => {
  const jobs = [];
  for (let i = 0; i < count; i++) {
    const type = i % 2 === 0 ? "COLLECT" : "DELIVER";
    jobs.push({
      orderNumber: startOrder + i,
      jobType: type,
      status: "ASSIGNED"
    });
  }
  return jobs;
};

// Mocks realistas
const eventsData = {};
systems.forEach(system => {
  eventsData[system] = {};
  timeline.forEach((time, index) => {
    const numEvents = Math.floor(Math.random() * 3); // 0 a 2 eventos por célula
    const cellEvents = [];

    for (let i = 0; i < numEvents; i++) {
      cellEvents.push({
        ongoingJob: [],
        jobOffers: generateJobs(Math.floor(Math.random() * 4) + 1, 637812100 + index*10 + i*4),
        queuedJob: []
      });
    }

    eventsData[system][time] = cellEvents;
  });
});

function App() {
  return (
    <div className="app-container">
      <h2>Disparity Report Summary - 30 Timestamps</h2>
      <Grid timeline={timeline} systems={systems} eventsData={eventsData} />
    </div>
  );
}

export default App;
