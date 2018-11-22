import React, { Component } from 'react';
import './news.css';
import axios from 'axios';
const imagePath = "http://site.aja.qa/";

class News extends Component {

  state = {
    gid: "",
    uid: "",
    modelData: [],
    attributes: []
  }

  isMob = () => {
    return window.outerWidth <= 992 ? false : true;
  }

  componentDidMount() {
    const urlPArts = window.location.href.split('/');

    this.setState({ gid: urlPArts[4], uid: urlPArts[5] });
    axios.get('http://site.aja.qa/api/news/' + urlPArts[4] + '/' + urlPArts[5])
      .then(response => {
        this.setState({ modelData: response.data ,attributes: response.data.Attributes});
        console.log('http://site.aja.qa/api/news/' + urlPArts[4] + '/' + urlPArts[5])
        console.log(this.state.modelData.Attributes)
      });

  }



  render() {
    return (
      <div className="detailed-page ">
        <article className="container">
          <div className="width90">

            <nav className="nav-path">
              <a href="/news">أخبار</a>
              <a href="/news/science">علوم</a>
            </nav>

            <h1 className="main-title">{this.state.modelData.PageTitle}</h1>

            <time className="pull-right time-of-post">{this.state.modelData.PublishOn}</time>
            <ul className="page-options page-section share">
              <li id="readspeaker_button1" className="rs_skip rsbtn rs_preserve">
                <div id="readspeaker_button1" className="rs_skip rsbtn rs_preserve rsbtn-inline">
                  <a className="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker" href="https://app-eu.readspeaker.com/cgi-bin/rsent?customerid=5707&amp;lang=ar_ar&amp;readid=DynamicContentContainer&amp;url=" data-rsevent-id="rs_627273" role="button">
                    <i className="flaticon-listen-icon"></i>
                    <span>استمع</span>
                  </a>
                </div>
              </li>
              <li><span onclick="changeFontSize('+')"><i className="flaticon-plus"></i></span>حجم الخط<span onclick="changeFontSize('-')"><i className="flaticon-minus"></i></span></li>
              <li className="print">
                <a href="/home/print/f6451603-4dff-4ca1-9c10-122741d17432/49b2645c-d11b-4673-8bd5-3edf26d3d688" target="_blank">
                  <i className="flaticon-printing-tool"></i>
                  طباعة
                  </a>
              </li>
              <li className="share-facebook">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://site.aja.qa/home/Getpage/f6451603-4dff-4ca1-9c10-122741d17432/49b2645c-d11b-4673-8bd5-3edf26d3d688&amp;t=كيف تتحكم في الوقت الذي تقضيه على الإنترنت؟" target="_blank">
                  <i className="flaticon-facebook-logo"></i>
                </a>
              </li>
              <li className="share-twitter">
                <a href="https://twitter.com/intent/tweet?text=كيف تتحكم في الوقت الذي تقضيه على الإنترنت؟&amp;source=sharethiscom&amp;related=sharethis&amp;via=AJArabic&amp;url=https://site.aja.qa/home/Getpage/f6451603-4dff-4ca1-9c10-122741d17432/49b2645c-d11b-4673-8bd5-3edf26d3d688" target="_blank">
                  <i className="flaticon-twitter-black-shape"></i>
                </a>
              </li>
              <li className="mail">
                <a href="/Services/sendtofriend/49b2645c-d11b-4673-8bd5-3edf26d3d688" target="_blank"><i className="flaticon-mail-icon"></i></a>
              </li>
            </ul>

            <div id="mediaSection">

              <div id="MainNewsTabs">




              </div>
              <div id="SubNewsTabs">
              </div>

              <figure className="lead da-all new-tab-image">
                <a className="" id="main-player">
                  <img src={imagePath + '/file/get/' + this.state.attributes['mainImage.ImageFile'] + "/1026/580"}  alt={this.state.modelData.PageTitle} title={this.state.modelData.PageTitle} />
                </a>
                <a href="/services/fullimagearticle/f6451603-4dff-4ca1-9c10-122741d17432/49b2645c-d11b-4673-8bd5-3edf26d3d688" className="zoom-in-page"></a>

                <figcaption>{this.state.attributes.MainImageDescription}</figcaption>

              </figure>
            </div>        </div>
          <div className="content">
            <div className="body">


              <div className="tinyMCE">


                <div id="DynamicContentContainer" dangerouslySetInnerHTML={{__html: this.state.attributes.Body}}>
                </div>



                <span className="ref">المصدر : مواقع التواصل الاجتماعي</span>

                <div className="clearfix">

                  <div id="map_canvas" style={{ "width": "0px; height: 0px;" }}>
                    <div id="MapLoading" style={{ "display": "none" }}>
                      <img className="imgloading" src="/Views/Shared/shared/images/readercomment/loading.GIF" />
                    </div>
                  </div>
                </div>

                <div className="tags">
                  <span>كلمات مفتاحية:</span>

                  <ul>
                    <li>
                      <a href="/home/search?q=كيف تتحكم في الوقت الذي تقضيه على الإنترنت؟">كيف تتحكم في الوقت الذي تقضيه على الإنترنت؟</a>
                    </li>
                  </ul>

                </div>
              </div>


            </div>
            <div className="left-side-bar">
              <div className="normal">
                <div className="important-news">
                  <div className="gold-label bb2 col-xs-12 padding-right-0">
                    <span className="gold-title">أهم الأخبار</span>
                  </div>
                  <ul>
                    <li><a href="/news/arabic/2018/10/16/مقال-اخبار-الإعلام-الأميركي-بن-سلمان-أمر-بقتل-خاشقجي-ومسؤول-بالمخابرات-كبش-فداء-وبن-سلمان-ينفي">مقال اخبار: الإعلام الأميركي: بن سلمان أمر بقتل خاشقجي ومسؤول بالمخابرات "كبش فداء" وبن سلمان ينفي</a></li>
                    <li><a href="/news/arabic/2018/10/17/نيويورك-تايمز-المشتبه-بهم-في-مقتل-خاشقجي-لهم-صلات-بولي-العهد-السعودي">نيويورك تايمز: المشتبه بهم في مقتل خاشقجي لهم صلات بولي العهد السعودي</a></li>
                    <li><a href="/news/humanrights/2017/11/26/في-إثيوبيا-الهلال-والصليب-يتعاونان">في إثيوبيا.. الهلال والصليب يتعاونان</a></li>
                    <li><a href="/news/arabic/2017/10/19/مقتل-قائد-قوات-النظام-السوري-بدير-الزور">مقتل قائد قوات النظام السوري بدير الزور</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </article>
        <div className="outer-area">
          <div className="more-wrap container">
            <div className="bb2">
              <span className="gold-title">المزيد من
           <a href="/news/science"> علوم</a>
              </span>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <div className="card-detailed-no-image" style={{ "height": "105px" }}>
                  <a href="http://site.aja.qa/news/science/2018/11/6/العقوبات-الأميركية-الجديدة">دخلت حيز التنفيذ اليوم.. إيران تتحدى العقوبات الأميركية الجديدة</a><time>6/11/2018 م. الساعة 14:44 </time>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="card-detailed-no-image" style={{ "height": "105px" }}>
                  <a href="http://site.aja.qa/news/science/2018/11/6/قتلة-خاشقجي">بريطانيا وكندا تلحان على ضرورة محاسبة قتلة خاشقجي</a><time>6/11/2018 م. الساعة 14:18 </time>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default News;
