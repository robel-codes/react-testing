import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { CounterTwo } from "./components/counter-two/counter-two";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        <CounterTwo count={1} />
        <Users />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
