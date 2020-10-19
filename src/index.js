import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route ,Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Home from './components/home'
import Data from './components/data'
import Title from './components/title';

const App=()=>{
  return(
    <BrowserRouter>
  <div>
    <header>
      <Title/>
    </header>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/data" component={Data}></Route>
    </Switch>
  </div>
  </BrowserRouter>
  )
}

ReactDOM.render(

    <App />,

  document.getElementById('root')
);


