import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import News from "./components/News";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Todo from "./components/Todo/Todo";
import NewList from "./components/new package/NewList";
import ChartsLib from '../src/components/ChartJS/ChartsLib'

function App() {
  let taskObj = {};
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/news' compoent={News}>
            <News />
          </Route>
          <Route path='/todo' compoent={Todo}>
            <Todo />
          </Route>
          <Route path='/login' compoent={Login}>
            <Login />
          </Route>
          <Route path='/charts' compoent={ChartsLib}>
          <ChartsLib />
          </Route>
          <Route path='/package' compoent={NewList}>
            <NewList />
          </Route>
          <Route path='/profile' compoent={Profile}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App