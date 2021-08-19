import logo from "../assets/images/logo.svg";
import "../assets/css/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mohammadsaleh Karimi - CRA Structure</p>
        <a
          className="App-link"
          href="https://t.me/mohammadsalehkarimi"
          target="_blank"
          rel="noreferrer"
        >
          Contact On Telegram
        </a>
      </header>
    </div>
  );
};

export default App;
