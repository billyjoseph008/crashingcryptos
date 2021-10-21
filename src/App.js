import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Navigation from './components/Navigation';

const App = () => {
  return (        
    <>    
      <Navigation/>
      <Switch>        
          <Route exact path='/' component={Home}/>   
          <Route path='/about' component={About}/>           
          <Route path='/contact' component={Contact}/>                  
      </Switch>
    </>
  );
}

export default App;
