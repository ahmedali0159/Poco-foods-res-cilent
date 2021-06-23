import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import FoodItems from "./components/FoodItems/FoodItems";

function App() {
  return (
    <div>
         <Router>
        <Switch>
          <Route exact path="/">
             <Header />
             <Banner />
          </Route>
          <Route path="/search=:searchQuery">
              <Banner />
          </Route>
          <Route path="/foodItems">
            <FoodItems />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
