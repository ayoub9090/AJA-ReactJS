import React, { Component } from 'react';
import { SlideToggle } from 'react-slide-toggle';
import axios from 'axios';
import './header.css';

class header extends Component {

    state = {
        menuItems: [],
        shown: false
    }

    componentDidMount() {
        var names = ['Jake', 'Jon', 'Thruster'];
        axios.get('http://site.aja.qa/api/header')
            .then(response => {
                this.setState({ menuItems: response.data.ds.nodes });
                console.log(this.state.menuItems.node[0].text['#cdata-section'])
            });
    }

    toggleSearchBox = () => {
        this.setState({ shown: !this.state.shown });
    }

    render() {
        return (
            <header className="header" style={{ top: 0 }}>
                <div className="container clearfix">
                    <a href="/" className="header__logo">
                        <img src="/assets/images/headerlogo.png" />
                    </a>
                    <div className="header__menu">
                        <div className="header__search" id="headerSearch_xs">
                            <div className="container relative">
                                <input type="text" className="header__searchInput" placeholder="ابحث" />
                                <div className="header__searchBtn" onClick="header_search()">
                                    <i className="ajaicon icon-search"></i>
                                </div>
                            </div>
                        </div>
                        <ul>
                            {/* {this.state.menuItems.map((node, index) => {
                                return <li key={index}>{node.text['#cdata-section']}</li>
                            })}
                            <li>
                               
                            </li> */}
                        </ul>
                    </div>
                    <div className="header__left">
                        <a href="//aljazeera.net/broadcastschedule" className="header__live" data-trackingaction="Click" data-trackingcat="MainNav" data-trackinglabel="Livestream Main Nav">
                            <i className="ajaicon icon-livestream"></i>
                            <span>البث الحي</span>
                        </a>
                        <a href="javascript:void(0)" onClick={this.toggleSearchBox} className="desk_search">
                            <i className="ajaicon icon-search"></i>
                        </a>
                        <div className="header__menuBtn" data-trackingaction="Click" data-trackingcat="MainNav" data-trackinglabel="Hamburger Main Nav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="header__search" style={{ display: this.state.shown ? 'block' : 'none' }} id="headerSearch_lg">
                    <div className="container relative">
                        <input type="text" className="header__searchInput" placeholder="ابحث" />
                        <div className="header__searchBtn" >ابحث</div>
                    </div>
                </div>

            </header>
        );

    }

}

export default header;