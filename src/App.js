import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Customers from './components/customers';
import Rentel from "./components/rentel";
import NotFound from './components/notFound';
import MovieFrom from "./components/movieForm";
import "./App.css";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <main className="container">
      <Switch>
        <Route path="/"  exact render={()=><Movies /> } />
        <Route path="/movies/:_id" render={(props)=><MovieFrom {...props}/> } />
        <Route path="/movies" render={()=><Movies /> } />
        <Route path="/customers" render={()=><Customers/> } />
        <Route path="/rentel" render={()=><Rentel/> } />
        <Route path="/login" render={()=><LoginForm/> } />
        <Route path="/not-found" render={()=><NotFound/> } />
        <Redirect to="/not-found" />
      </Switch>
      </main>
        </>
    );
  }
}
export default App;

