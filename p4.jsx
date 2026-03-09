import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [view, setView] = React.useState("home");

  const renderView = () => {
    if (view === "home") {
      return <h2>Home View</h2>;
    }

    if (view === "about") {
      return <h2>About View</h2>;
    }

    if (view === "contact") {
      return <h2>Contact View</h2>;
    }
  };

  return (
    <div>
      <h1>Problem 4 - Dynamic View Switching</h1>

      <button onClick={() => setView("home")}>Home</button>
      <button onClick={() => setView("about")}>About</button>
      <button onClick={() => setView("contact")}>Contact</button>

      <hr />

      {renderView()}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("reactapp"));
root.render(<App />);