import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [view, setView] = React.useState("home");

  let content;

  if (view === "home") {
    content = (
      <div>
        <h2>Home View</h2>
        <p>Welcome to my React dynamic view switching demo.</p>
        <p>This page demonstrates how React can update content without reloading the page.</p>

        <h3>Features</h3>
        <ul>
          <li>Dynamic content switching</li>
          <li>React state management</li>
          <li>Single-page application behavior</li>
        </ul>

        <p>Select the buttons above to explore other sections of the application.</p>
      </div>
    );
  } else if (view === "about") {
    content = (
      <div>
        <h2>About View</h2>
        <p>This project demonstrates dynamic interface updates using React.</p>

        <h3>How it works</h3>
        <p>
          React uses a state variable called <b>view</b> to determine which
          section of the page should be displayed. When a button is clicked,
          the state updates and React automatically re-renders the interface.
        </p>

        <h3>Technologies Used</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Webpack</li>
          <li>Babel</li>
        </ul>
      </div>
    );
  } else if (view === "contact") {
    content = (
      <div>
        <h2>Contact View</h2>

        <h3>Student Information</h3>
        <p><strong>Name:</strong> Lalith Uriti</p>
        <p><strong>Project:</strong> Project 4 – React Dynamic Views</p>
        <p><strong>Course:</strong> Web Development</p>

        <h3>Purpose of This Page</h3>
        <p>
          This page exists to show how different content sections can be displayed
          dynamically in a single-page application using React state.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Problem 4 - Dynamic View Switching</h1>
      <p>Created by <b>Lalith Uriti</b></p>

      <button onClick={() => setView("home")}>Home</button>
      <button onClick={() => setView("about")}>About</button>
      <button onClick={() => setView("contact")}>Contact</button>

      <hr />

      {content}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("reactapp"));