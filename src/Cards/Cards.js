import React, { Component } from 'react';
import './Cards.css';


var cardsType = "big";
class cards extends Component {
    state = {
        showShare: false
    }
    toggleShare = () => {
        this.setState({ showShare: !this.state.showShare });
    }

    render() {
        return (
            <div className={this.props.LayoutType == "SmallCard" ? 'card card-small counted' : 'card counted'}>
                <div className="card__img">
                    <a href={this.props.url}>
                        <picture>
                            <img className="lazy initial loaded" src={this.props.ImageSrc} title={this.props.title} alt={this.props.title} />
                        </picture>
                    </a>
                </div>
                <a className="card__title" href={this.props.url}>{this.props.title}</a>
                {this.props.HasSummary =="True" ? <div className="card__text truncate130">{this.props.Summary}</div> : null}
                <div className="shareContainer">
                    <div className="shareBtn" onClick={this.toggleShare}>
                        <span>شارك</span>
                        <div data-shareurl={this.props.url} className="shareDiv">
                            <a className={this.state.showShare ? 'shareDiv__facebook share_visible' : 'shareDiv__facebook'} target="_blank" href={'https://www.facebook.com/sharer/sharer.php?u=' + this.props.url}>
                                <i className="ajaicon icon-facebook"></i>
                            </a>
                            <a className={this.state.showShare ? 'shareDiv__twitter share_visible' : 'shareDiv__twitter'} target="_blank" href={'https://wd.sharethis.com/api/sharer.php?fpc=7077b71-14c69c1abf8-3bfd879f-33&amp;sessionID=1427735794590.77159&amp;hostname=www.aljazeera.net&amp;location=' + this.props.url + '&amp;publisher=ur-76924409-632d-5b6-6664-497cd128771f&amp;shareHash=sthash.VRubHGXo.uxfs&amp;incomingHash=&amp;refDomain=&amp;refQuery=&amp;url=' + this.props.url + '&amp;sharURL=' + this.props.url + '&amp;buttonType=custom&amp;destination=twitter&amp;source=chicklet&amp;shorten=true&amp;title=' + this.props.title + '&amp;image=&amp;description=&amp;via=ajarabic'} >
                                <i className="ajaicon icon-twitter"></i>
                            </a>
                            <a className={this.state.showShare ? 'shareDiv__whatsapp share_visible' : 'shareDiv__whatsapp'} target="_blank" href={'whatsapp://send?text=' + this.props.title + ',' + this.props.url}>
                                <i className="ajaicon icon-whatsapp"></i>
                            </a>
                            <div className={this.state.showShare ? '' : 'share_clickPreventer'}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default cards;