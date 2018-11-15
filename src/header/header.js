import React, { Component } from 'react';
import Sticky from 'react-sticky-el';
import axios from 'axios';
import './header.css';

class header extends Component {

    state = {
        menuItems: [],
        searchShown: false,
        mobMenuShown: this.isMob ? false : true,
    }

    componentDidMount() {

        axios.get('http://site.aja.qa/api/header')
            .then(response => {
                this.setState({ menuItems: response.data.MenuItems });
            });
    }
    isMob = () => {
        return window.outerWidth <= 992 ? false : true;
    }
    toggleSearchBox = () => {
        this.setState({ searchShown: !this.state.searchShown });
    }
    toggleMobMenu = () => {
        this.setState({ mobMenuShown: !this.state.mobMenuShown })
    }


    render() {
        return (
            <Sticky>
                <header className="header" style={{ top: 0 }}>
                    <div className="container clearfix">
                        <a href="/" className="header__logo">
                            <img src="/assets/images/headerlogo.png" />
                        </a>
                        <div className="header__menu" style={{ display: this.state.mobMenuShown? 'block' : 'none' }}>
                            <div className="header__search" id="headerSearch_xs">
                                <div className="container relative">
                                    <input type="text" className="header__searchInput" placeholder="ابحث" />
                                    <div className="header__searchBtn">
                                        <i className="ajaicon icon-search"></i>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {
                                    this.state.menuItems.map((node, index) => {
                                        return <li key={index} className={node.items != null ? "has-childs" : ""} ><a href={node.Link}>{node.Name}</a>
                                            {node.items != null ?
                                                <ul className="sub-menu">
                                                    {node.items.map((node, index) => {
                                                        return <li key={index} ><a href={node.Link}>{node.Name}</a></li>
                                                    })}
                                                </ul>
                                                : null}
                                        </li>
                                    }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="header__left">
                            <a href="//aljazeera.net/broadcastschedule" className="header__live">
                                <i className="ajaicon icon-livestream"></i>
                                <span>البث الحي</span>
                            </a>
                            <a href="javascript:void(0)" onClick={this.toggleSearchBox} className="desk_search">
                                <i className="ajaicon icon-search"></i>
                            </a>
                            <div className={this.state.mobMenuShown ? "header__menuBtn opened" : "header__menuBtn"} onClick={this.toggleMobMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="header__search" style={{ display: this.state.searchShown ? 'block' : 'none' }} id="headerSearch_lg">
                        <div className="container relative">
                            <input type="text" className="header__searchInput" placeholder="ابحث" />
                            <div className="header__searchBtn" >ابحث</div>
                        </div>
                    </div>

                </header>
            </Sticky>
        );

    }

}

export default header;