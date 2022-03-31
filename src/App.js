import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Introduction } from "./Pages/Introduction";
import Search from "./Pages/Search/Search";
import { Post } from "./Pages/Post";
import { Home } from "./Pages/Home";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/search" component={Search} />
            <Route path="/post" component={Post} />
          </Switch>
        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;
