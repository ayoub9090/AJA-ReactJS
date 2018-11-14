import React, { Component } from 'react';
import axios from 'axios';
import Header from './header/header';
import Cards from './Cards/Cards';
import Interactive from './interactive/interactive';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import interactive from './interactive/interactive';

class App extends Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    axios.get('http://site.aja.qa/api/news/1')
      .then(response => {
        this.setState({ cards: response.data });
      });
  }


  render() {

    const cards = this.state.cards.map((card,index) => {
      return <Cards key={index} url={card.FriendlyURL} LayoutType={card.LayoutType} title={card.Title} Summary={card.Summary} ImageSrc={card.ImageSrc.replace('https:','http:')} />
    });

    return (
      <div className="App">
      <Header />
      <div className="willHavePaddingTopFixedHeader"></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {cards}
            </div>
            <div className="col-lg-4 leftSide">
              <Interactive />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
