import "./App.css";
import { push as Menu } from "react-burger-menu";

function App() {
  // const showSettings = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
}

export default App;
