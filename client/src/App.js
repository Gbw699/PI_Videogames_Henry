import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Videogames from "./Components/Videogames/Videogames.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Form from "./Components/Form/Form.jsx";
import { Routes, Route, useLocation, Switch } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      {location.pathname !== "/" && <Nav />} 
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Videogames />
        </Route>

        {/* <Route path="/home" element={<Videogames />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/form" element={<Form />} /> */}
      </Switch>
    </div>
  );
}

export default App;
