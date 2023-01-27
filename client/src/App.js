import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Nav from "./Components/Nav/Nav";
import Videogames from "./Components/Videogames/Videogames.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Form from "./Components/Form/Form.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Nav />
          <Videogames />
        </Route>
        <Route path="/detail/:detailId">
          <Detail />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
