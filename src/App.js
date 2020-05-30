import React from "react";
import JobCard from "./JobCard";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Header />
      </header>
      <div className="row">
        <JobCard />
      </div>
    </div>
  );
}

export default App;
