import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Homepage from './homepage/homepage';
import News from './news/news';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="willHavePaddingTopFixedHeader"></div>


        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/news/:id/:type" component={News} />
          </Switch>
        </Router>



        <Footer />
      </div>
    );
  }
}

export default App;
