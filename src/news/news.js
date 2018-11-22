import React, { Component } from 'react';
import './news.css';
import axios from 'axios';


class News extends Component {

  state = {
    gid: "",
    uid: "",
    modelData: [],
    attributes: [],
    MostImportant: [],
    contentFontSize: 22,
  }

   changeFontSize = (type) => {
    let size = this.state.contentFontSize;
    if (type == "up" && size <= 30) {
      this.setState({ contentFontSize: (size + 2) });
    }else if (type == "down" && size >= 12) {
      this.setState({ contentFontSize: (size - 2) });
    }
  };

  isMob = () => {
    return window.outerWidth <= 992 ? false : true;
  }

  componentDidMount() {
    const urlPArts = window.location.href.split('/');

    this.setState({ gid: urlPArts[4], uid: urlPArts[5] });
    axios.get(process.env.REACT_APP_API_URI + '/api/news/' + urlPArts[4] + '/' + urlPArts[5])
      .then(response => {
        this.setState({ modelData: response.data, attributes: response.data.Attributes });
        console.log(process.env.REACT_APP_API_URI + '/api/news/' + urlPArts[4] + '/' + urlPArts[5])
        console.log(this.state.modelData.Attributes)
      });


    axios.get(process.env.REACT_APP_API_URI + '/API/News/MostImportantNews/' + urlPArts[4] + '/' + urlPArts[5])
      .then(response => {
        this.setState({ MostImportant: response.data });
        console.log(process.env.REACT_APP_API_URI + '/API/News/MostImportantNews/' + urlPArts[4] + '/' + urlPArts[5])
        //  console.log(this.state.modelData.Attributes)
      });


  }



  render() {
    return (
      <div className="detailed-page ">
      <h1>hello</h1>
      <h1>{this.props.match.params.id}</h1>
        <article className="container">
          <div className="width90">

            <nav className="nav-path">
              <a href="/news">أخبار</a>
              <a href="/news/science">علوم</a>
            </nav>

            <h1 className="main-title">{this.state.modelData.PageTitle}</h1>

            <time className="pull-right time-of-post">{this.state.modelData.PublishOn}</time>
            <ul className="page-options page-section share">

              <li className="font-size-changer-buttons"><span onClick={() => this.changeFontSize('up')}><i className="flaticon-plus"></i></span>حجم الخط<span onClick={() => this.changeFontSize('down')}><i className="flaticon-minus"></i></span></li>

              <li className="print">
                <a href={process.env.REACT_APP_API_URI + '/home/print/' + this.state.attributes['eId'] + '/' + this.state.attributes['rId']} target="_blank">
                  <i className="flaticon-printing-tool"></i>
                  طباعة
                  </a>
              </li>
              <li className="share-facebook">
                <a href={'https://www.facebook.com/sharer/sharer.php?u=' + this.state.attributes['Link']} target="_blank">
                  <i className="flaticon-facebook-logo"></i>
                </a>
              </li>
              <li className="share-twitter">
                <a href={'https://twitter.com/intent/tweet?text=' + this.state.modelData.PageTitle + '&amp;source=sharethiscom&amp;related=sharethis&amp;via=AJArabic&amp;url=' + this.state.attributes['Link']} target="_blank">
                  <i className="flaticon-twitter-black-shape"></i>
                </a>
              </li>
              <li className="mail">
                <a href={process.env.REACT_APP_API_URI + '/Services/sendtofriend/' + this.state.attributes['eId']} target="_blank"><i className="flaticon-mail-icon"></i></a>
              </li>
            </ul>

            <div id="mediaSection">

              <div id="MainNewsTabs">




              </div>
              <div id="SubNewsTabs">
              </div>

              <figure className="lead da-all new-tab-image">
                <a className="" id="main-player">
                  <img src={process.env.REACT_APP_URI_ImagePath + '/file/get/' + this.state.attributes['mainImage.ImageFile'] + "/1026/580"} alt={this.state.modelData.PageTitle} title={this.state.modelData.PageTitle} />
                </a>
                <a href="#" className="zoom-in-page"></a>

                <figcaption>{this.state.attributes.MainImageDescription}</figcaption>

              </figure>
            </div>        </div>
          <div className="content">
            <div className="body">


              <div className="tinyMCE">


                <div id="DynamicContentContainer" style={{ fontSize: this.state.contentFontSize }} dangerouslySetInnerHTML={{ __html: this.state.attributes.Body }}>
                </div>



                <span className="ref" style={{ 'marginBottom': '20px' }}>المصدر : مواقع التواصل الاجتماعي</span>

                <div className="clearfix">


                </div>

                {/*<div className="tags">
                  <span>كلمات مفتاحية:</span>

                  <ul>
                    <li>
                      <a href={'/home/search?q=' + ''}>كيف تتحكم في الوقت الذي تقضيه على الإنترنت؟</a>
                    </li>
                  </ul>

                </div>
    */}
              </div>


            </div>
            <div className="left-side-bar">
              <div className="normal">
                <div className="important-news">
                  <div className="gold-label bb2 col-xs-12 padding-right-0">
                    <span className="gold-title">أهم الأخبار</span>
                  </div>
                  <ul>
                    {
                      this.state.MostImportant.map((node, index) => {
                        return <li key={index} ><a href={'/news/' + node.EntityID + '/' + node.ObjectId}>{node.Title}</a></li>
                      })
                    }
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </article>
        <div className="outer-area">
        </div>
      </div>
    );
  }
}


export default News;
