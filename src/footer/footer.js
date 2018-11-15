import React from 'react';
import './footer.css';

const footer = (props) => {

    return (
        <footer>
    <div className="footer__head_gray">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4 order-lg-8 text-right">
                    <ul className="footer__socilaLinks">
                        <li>
                            <a target="_blank" href="//www.facebook.com/aljazeerachannel" className="footer__socialBtn fab fa-facebook-f">
                                <i className="ajaicon icon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="//twitter.com/ajarabic" className="footer__socialBtn fab fa-twitter">
                                <i className="ajaicon icon-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="//www.youtube.com/aljazeerachannel" className="footer__socialBtn fab fa-youtube">
                                <i className="ajaicon icon-play"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="//www.instagram.com/aljazeera/" className="footer__socialBtn fab fab fa-instagram">
                                <i className="ajaicon icon-instagram-logo"></i>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" href="/aljazeerarss/be46a341-fe26-41f1-acab-b6ed9c198b19/e6aef64d-084c-42f0-8269-abe48e0cd154" className="footer__socialBtn fas fa-rss">
                                <i className="ajaicon icon-rss"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="//plus.google.com/100856194419337147176/posts" className="footer__socialBtn fab fa-google-plus-g">
                                <i className="ajaicon icon-google-plus-symbol"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-8">
                    <ul className="footer__headLinkss">
                        <li className="visible-sm"><a href="/portal/pages/من-نحن" target="_blank">عن القناة</a></li>
                        <li className="visible-sm"><a href="//sat.aljazeera.net/ar" target="_blank">ترددات البث</a></li>
                        <li className="visible-sm"><a href="/portal/pages/مركز-المساعدة" target="_blank">تواصل معنا</a></li>

                        <li className="visible-md"><a href="/portal/pages/من-نحن" target="_blank">من نحن</a></li>
                        <li className="visible-md"><a href="/portal/pages/مركز-المساعدة" target="_blank">تواصل معنا</a></li>
                        <li className="visible-md"><a href="/AdvertiseWithUs.html" target="_blank">أعلن معنا</a></li>
                        <li className="visible-md"><a href="http://recruitment.aljazeera.net/ar" target="_blank">وظائف شاغرة</a></li>
                        <li className="visible-md"><a href="/service/خريطة-الموقع" target="_blank">خريطة الموقع</a></li>
                        <li className="visible-md"><a href="http://sat.aljazeera.net/ar" target="_blank">ترددات البث</a></li>
                        <li className="visible-md"><a href="http://www.aljazeera.net/portal/pages/%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA-%D8%B5%D8%AD%D9%81%D9%8A%D8%A9" target="_blank">بيانات صحفية</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__head_black">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row footer__links">
                        <div className="col-7">
                            <div className="footer__linksTitle">شبكتنا</div>
                            <ul className="footer__linksBody">
                                <li><a href="http://studies.aljazeera.net/" target="_blank">مركز الجزيرة للدراسات</a></li>
                                <li><a href="http://institute.aljazeera.net/" target="_blank">معهد الجزيرة للإعلام</a></li>
                                <li><a href="http://liberties.aljazeera.com/ar/" target="_blank">مركز الجزيرة للحريّات العامّة وحقوق الإنسان</a></li>
                                <li><a href="/portal/pages/اتفاقية-الموقع" target="_blank">الأحكام والشروط</a></li>
                                <li><a href="https://network.aljazeera.com/ar/privacy" target="_blank">سياسة الخصوصية</a></li>
                                <li><a href="https://network.aljazeera.com/ar/cookies" target="_blank">سياسة ملفات تعريف الارتباط</a></li>
                                <li><a href="javascript:$('html, body').animate({ scrollTop: 0 }, 800); AJPrivacy.gateway.openModal()" target="_blank">تفضيلات ملفات تعريف الارتباط</a></li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <div className="footer__linksTitle">مواقع الشبكة </div>
                            <ul className="footer__linksBody">
                                <li><a href="//www.aljazeera.net">الجزيرة الإخبارية</a></li>
                                <li><a href="//www.aljazeera.com/" target="_blank">الجزيرة الإنجليزية </a></li>
                                <li><a href="http://mubasher.aljazeera.net/" target="_blank">الجزيرة مباشر</a></li>
                                <li><a href="http://doc.aljazeera.net/" target="_blank">الجزيرة الوثائقية </a></li>
                                <li><a href="http://balkans.aljazeera.net/" target="_blank">الجزيرة البلقان</a></li>
                                <li><a href="//ajplus.net/arabi/" target="_blank"> عربي + AJ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 text-left-md">
                    <div className="footer__info">
                        <a className="mt16 block">
                            <img className="visible-sm" src="/assets/images/aljazeera-footer.png" alt="Aljazeera" />
                            <img className="visible-md footerLogoMD" src="/assets/images/aljazeera-footer-lg.png" alt="Aljazeera" />
                        </a>
                        <div className="text-center mt16"> جميع الحقوق محفوظة © 2018 شبكة الجزيرة الاعلامية</div>
                        <div className="poweredBy">
                            Powered by:
                            <a href="http://www.ihorizons.com" target="_blank">
                                <img src="/assets/images/iHorizons-icon.png" className="ihorizonsLogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    );

}

export default footer;