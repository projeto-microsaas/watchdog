import React from "react";
import Carousel from "./Carousel";
import "./Carousel.css";

function App() {
  // 🔹 Mocks com 10+ registros cada
  const data = {
    COURNAN: {
      color: "#e6f0ff", // azul
      ongoingJob: [
        { date: "2025-07-26 05:12:35", jobType: "COLLECT", orderNumber: 637812176, status: "ASSIGNED" },
        { date: "2025-07-27 09:15:00", jobType: "COLLECT", orderNumber: 637812177, status: "IN_PROGRESS" },
        { date: "2025-07-28 11:00:42", jobType: "DELIVERY", orderNumber: 637812178, status: "DONE" },
        { date: "2025-07-29 15:45:12", jobType: "TRANSFER", orderNumber: 637812179, status: "PENDING" },
        { date: "2025-07-30 07:33:55", jobType: "COLLECT", orderNumber: 637812180, status: "ASSIGNED" },
        { date: "2025-08-01 10:10:10", jobType: "DELIVERY", orderNumber: 637812181, status: "IN_PROGRESS" },
        { date: "2025-08-02 12:22:40", jobType: "COLLECT", orderNumber: 637812182, status: "DONE" },
        { date: "2025-08-03 13:55:20", jobType: "DELIVERY", orderNumber: 637812183, status: "FAILED" },
        { date: "2025-08-04 14:44:50", jobType: "TRANSFER", orderNumber: 637812184, status: "PENDING" },
        { date: "2025-08-05 16:30:05", jobType: "COLLECT", orderNumber: 637812185, status: "ASSIGNED" }
      ],
      jobOffers: [
        { date: "2025-07-26 08:00:00", jobType: "DELIVERY", orderNumber: 637813000, status: "PENDING" },
        { date: "2025-07-27 09:45:20", jobType: "SUPPORT", orderNumber: 637813001, status: "OPEN" },
        { date: "2025-07-28 11:10:11", jobType: "COLLECT", orderNumber: 637813002, status: "ASSIGNED" },
        { date: "2025-07-29 12:12:12", jobType: "TRANSFER", orderNumber: 637813003, status: "DONE" },
        { date: "2025-07-30 13:13:13", jobType: "DELIVERY", orderNumber: 637813004, status: "FAILED" },
        { date: "2025-07-31 14:14:14", jobType: "COLLECT", orderNumber: 637813005, status: "PENDING" },
        { date: "2025-08-01 15:15:15", jobType: "SUPPORT", orderNumber: 637813006, status: "OPEN" },
        { date: "2025-08-02 16:16:16", jobType: "DELIVERY", orderNumber: 637813007, status: "ASSIGNED" },
        { date: "2025-08-03 17:17:17", jobType: "TRANSFER", orderNumber: 637813008, status: "DONE" },
        { date: "2025-08-04 18:18:18", jobType: "SUPPORT", orderNumber: 637813009, status: "FAILED" }
      ],
      queuedJob: [
        { date: "2025-07-26 19:00:00", jobType: "COLLECT", orderNumber: 637814000, status: "QUEUED" },
        { date: "2025-07-27 20:20:20", jobType: "TRANSFER", orderNumber: 637814001, status: "QUEUED" },
        { date: "2025-07-28 21:21:21", jobType: "DELIVERY", orderNumber: 637814002, status: "QUEUED" },
        { date: "2025-07-29 22:22:22", jobType: "COLLECT", orderNumber: 637814003, status: "QUEUED" },
        { date: "2025-07-30 23:23:23", jobType: "SUPPORT", orderNumber: 637814004, status: "QUEUED" },
        { date: "2025-07-31 07:07:07", jobType: "DELIVERY", orderNumber: 637814005, status: "QUEUED" },
        { date: "2025-08-01 08:08:08", jobType: "TRANSFER", orderNumber: 637814006, status: "QUEUED" },
        { date: "2025-08-02 09:09:09", jobType: "COLLECT", orderNumber: 637814007, status: "QUEUED" },
        { date: "2025-08-03 10:10:10", jobType: "SUPPORT", orderNumber: 637814008, status: "QUEUED" },
        { date: "2025-08-04 11:11:11", jobType: "DELIVERY", orderNumber: 637814009, status: "QUEUED" }
      ]
    },
    COS: {
      color: "#fff2cc", // amarelo
      ongoingJob: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 10:00:00`,
        jobType: i % 2 === 0 ? "MAINTENANCE" : "INSPECTION",
        orderNumber: 638000000 + i,
        status: i % 3 === 0 ? "ONGOING" : "ASSIGNED"
      })),
      jobOffers: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 11:30:00`,
        jobType: i % 2 === 0 ? "DELIVERY" : "SUPPORT",
        orderNumber: 638010000 + i,
        status: i % 2 === 0 ? "OPEN" : "PENDING"
      })),
      queuedJob: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 12:45:00`,
        jobType: "COLLECT",
        orderNumber: 638020000 + i,
        status: "QUEUED"
      }))
    },
    CMAS: {
      color: "#e6ffe6", // verde
      ongoingJob: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 13:00:00`,
        jobType: i % 2 === 0 ? "DELIVERY" : "TRANSFER",
        orderNumber: 638030000 + i,
        status: i % 3 === 0 ? "FAILED" : "IN_PROGRESS"
      })),
      jobOffers: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 14:00:00`,
        jobType: "SUPPORT",
        orderNumber: 638040000 + i,
        status: i % 2 === 0 ? "PENDING" : "OPEN"
      })),
      queuedJob: Array.from({ length: 10 }, (_, i) => ({
        date: `2025-08-${i + 1} 15:30:00`,
        jobType: i % 2 === 0 ? "COLLECT" : "DELIVERY",
        orderNumber: 638050000 + i,
        status: "QUEUED"
      }))
    }
  };

  return (
    <div className="app-container">
      {Object.entries(data).map(([systemName, props]) => (
        <div
          key={systemName}
          className="system-block"
          style={{ backgroundColor: props.color }}
        >
          <h2 className="system-title">{systemName}</h2>

          <div className="property-block">
            <h3>Ongoing Job</h3>
            <Carousel items={props.ongoingJob} />
          </div>

          <div className="property-block">
            <h3>Job Offers</h3>
            <Carousel items={props.jobOffers} />
          </div>

          <div className="property-block">
            <h3>Queued Job</h3>
            <Carousel items={props.queuedJob} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
