import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import circle from "./asset/circle.png";

function App() {
  return (
    <div className="mainapp">
      <Header></Header>
      <Home></Home>
      <div className="edit-btn1">
        <img src={circle} alt="" />
      </div>
      <Menu></Menu>
      <Body></Body>
    </div>
  );
}

export default App;
