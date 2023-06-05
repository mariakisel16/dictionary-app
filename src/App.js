import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="logo-app" alt="dictionary-logo" />
        </header>
        <main>
          <h1> Dictionary App</h1>
          <Dictionary />
        </main>
      </div>
      <footer>
        This app was created by Maria Kisel, and it is{" "}
        <a
          href="https://github.com/mariakisel16/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
