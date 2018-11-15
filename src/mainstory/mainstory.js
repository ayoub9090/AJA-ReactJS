import React from 'react';

const mainstory = (props) => {
    return (
        <div className="mainStory">
            <div className="row">
                <div className="col-lg-7">
                    <a href={props.url}>
                        <img className="lazy initial loaded" src={props.ImageSrc} alt={props.title} title={props.title} />
                    </a>
                </div>
                <div className="col-lg-5">
                    <a href={props.url} className="mainStory__title">{props.title}</a>
                    <div className="card__text">{props.Summary}</div>
                    <div className="shareContainer">
                        <div className="shareBtn">
                            <span>شارك</span>
                            <div data-shareurl={props.url} className="shareDiv">
                                <a className="shareDiv__facebook" target="_blank" href={'https://www.facebook.com/sharer/sharer.php?u=' + props.url}>
                                    <i className="ajaicon icon-facebook"></i>
                                </a>
                                <a className="shareDiv__twitter" target="_blank" href={'https://wd.sharethis.com/api/sharer.php?fpc=7077b71-14c69c1abf8-3bfd879f-33&amp;sessionID=1427735794590.77159&amp;hostname=www.aljazeera.net&amp;location=' + props.url + '&amp;publisher=ur-76924409-632d-5b6-6664-497cd128771f&amp;shareHash=sthash.VRubHGXo.uxfs&amp;incomingHash=&amp;refDomain=&amp;refQuery=&amp;url=' + props.url + '&amp;sharURL=' + props.url + '&amp;buttonType=custom&amp;destination=twitter&amp;source=chicklet&amp;shorten=true&amp;title=' + props.title + '&amp;image=&amp;description=&amp;via=ajarabic'} >
                                    <i className="ajaicon icon-twitter"></i>
                                </a>
                                <a className="shareDiv__whatsapp" target="_blank" href={'whatsapp://send?text=' + props.title + ',' + props.url}>
                                    <i className="ajaicon icon-whatsapp"></i>
                                </a>
                                <div className="share_clickPreventer"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default mainstory;