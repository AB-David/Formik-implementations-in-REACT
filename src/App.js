import React from "react";
import VoteContainer from "./VoteContainer";
import "./App.css";

// Contain the application
function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>WEEK-13 REACT FORMS</h1>
        </div>
      </header>
      <div className="container">
        <section className="vote-container">
          {/* Display the vote component */}
          <VoteContainer />
        </section>
      </div>
    </>
  );
}

export default App;
