import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Loading from "./components/Loading";
import AuthRouter from "./customRouter/AuthRouter";
import PageRender from "./customRouter/PageRender";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { checkAuth } from "./redux/actions/authAction";

function App() {

  const { loading, auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  console.log(auth);

  return (
    <Router>
      <div className="App">
        <Header />
        { loading ? <Loading /> : null }
        <div className="main">
          <Route exact path="/" component={auth.token ? Home : Login} />
          <AuthRouter exact path="/:page" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
