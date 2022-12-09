import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Menu></Menu>
      <Body></Body>
    </div>
  );
}

export default App;
