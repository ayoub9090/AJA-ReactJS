import React, { Component } from 'react';
import axios from 'axios';
import Mainstory from '../mainstory/mainstory';
import Cards from '../Cards/Cards';
import Interactive from '../interactive/interactive';

class Homepage extends Component {

  state = {
    cards: [],
    loadedCards: 1,
    cardLoading: false,
    finishedLoading: false,
    urlOfImages: 'http://site.aja.qa/',
  } 

  isMob = () => {
    return window.outerWidth <= 992 ? false : true;
  } 

  componentDidMount() {
    axios.get('http://site.aja.qa/api/news/' + this.state.loadedCards)
      .then(response => {
        this.setState({ cards: response.data });
      });

    window.onscroll = () => {

      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 300) {
        if (!this.state.cardLoading && !this.state.finishedLoading) {
          this.loadCards();
        }
      }
    };
  }


  loadCards = () => {
    if(document.querySelector(".cardsHome") !== null){
    var loaderImg = document.createElement('img');
    loaderImg.src = "/assets/images/logoloader.gif";
    loaderImg.className = "loadMore";
    document.querySelector(".cardsHome").appendChild(loaderImg);
    this.state.cardLoading = true;
    this.setState({ loadedCards: this.state.loadedCards + 1 });
    axios.get('http://site.aja.qa/api/news/' + this.state.loadedCards)
      .then(response => {
        document.querySelector(".cardsHome").removeChild(loaderImg);
        console.log(response.data);
        if (response.data.length > 0) {
          this.setState({
            cardLoading: false,
            cards: this.state.cards.concat(response.data)
          });
        } else {
          this.state.finishedLoading = true;
        }
      });
    }
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.state.cards.map((card, index) => {
                if (index == 0) {
                  return <Mainstory key={index} EntityID={card.EntityID} ObjectID={card.ObjectID} url={card.FriendlyURL} LayoutType={card.LayoutType} title={card.Title} Summary={card.Summary} ImageSrc={this.state.urlOfImages + card.MainImage1.replace('https:', 'http:')} />
                }
              })}

            </div>
            <div className="col-lg-8 cardsHome">
              {this.state.cards.map((card, index) => {
                if (index > 0) {
                  return <Cards key={index} HasSummary={card.HasSummary} EntityID={card.EntityID} ObjectID={card.ObjectID} url={card.FriendlyURL} LayoutType={card.LayoutType} title={card.Title} Summary={card.Summary} image1={this.state.urlOfImages + card.MainImage1.replace('https:', 'http:')} image2={this.state.urlOfImages + card.MainImage2.replace('https:', 'http:')} />
                }
              })}

            </div>
            <div className="col-lg-4 leftSide">
              <Interactive />
            </div>
          </div>

        </div>
    );
  }
}

export default Homepage;
