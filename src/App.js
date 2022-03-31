import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Introduction } from "./components/Pages/Introduction";
import  Search  from "./components/Pages/Search/Search";
import { Blog } from "./components/Pages/Consult";
import { Contact } from "./components/Pages/Evaluate";
import { Post } from "./components/Pages/Post";
import { Home } from "./components/Pages/Home";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact  path="/" component={Home} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/search" component={Search} />
            <Route path="/consult" component={Blog} />
            <Route path="/evaluation" component={Contact} />
            <Route path="/post" component={Post} />
          </Switch>
        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;
