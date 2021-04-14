import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrimarySearchAppBar from "./Component/Header";
import Detail from "./Page/Detail";
import Error from "./Page/Error";
import SearchPage from "./Page/Search";
function App() {
  return (
    <div>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search-movie/:name" exact>
            <SearchPage />
          </Route>
          <Route path="/movie-detail/:movieID" exact>
            <Detail />
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
