import React from "react";
import JobCard from "./JobCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container"></header>
      <div className="row">
        <JobCard />
      </div>
    </div>
  );
}

export default App;
