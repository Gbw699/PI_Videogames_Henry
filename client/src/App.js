import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Videogames from "./Components/Videogames/Videogames.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Form from "./Components/Form/Form.jsx";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
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
