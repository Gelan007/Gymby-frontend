import React from 'react';
import NavbarLanding from "../../components/navbars/NavbarLanding";
import s from "./MainPage.module.scss"
import ButtonOrange from "../../components/UI/buttons/ButtonOrange";
import notebook from '../../assets/images/LandingPage/mainLandingPage/Macbook.svg'
import iphone from '../../assets/images/LandingPage/mainLandingPage/Iphone (1).svg'
import googlePlay from '../../assets/images/general/GooglePlay.svg'
import appStore from '../../assets/images/general/AppStore.svg'
import storyIcon1 from '../../assets/images/LandingPage/story/Group1.svg'
import storyIcon2 from '../../assets/images/LandingPage/story/Group2.svg'
import storyIcon3 from '../../assets/images/LandingPage/story/Group3.svg'
import storyIcon4 from '../../assets/images/LandingPage/story/Group4.svg'
import storyIcon5 from '../../assets/images/LandingPage/story/Group5.svg'
import storyIcon6 from '../../assets/images/LandingPage/story/Group6.svg'
import storyIcon7 from '../../assets/images/LandingPage/story/Group7.svg'
import storyIcon8 from '../../assets/images/LandingPage/story/Group8.svg'
import dumbbell from '../../assets/images/general/dumbbell.svg'
import girlInGym from '../../assets/images/LandingPage/way/GirlInGym.png'
import trainerWithStudent from '../../assets/images/LandingPage/way/TrainerWithStudent.png'
import sportsmenWithPhone from '../../assets/images/LandingPage/way/sportsmenWithPhone.png'
import trainerEllipse from '../../assets/images/LandingPage/trainerAdvertising/trainerPhotoEllipse.png'
import logo from '../../assets/images/general/logo_web.svg'
import ukraine from '../../assets/images/general/ukraine_icon.svg'
import usa from '../../assets/images/general/usa_icon.svg'
import mail from '../../assets/images/LandingPage/footer/mail.svg'
import phone from '../../assets/images/LandingPage/footer/phone.svg'
import global from '../../assets/images/LandingPage/footer/global.svg'
import facebook from '../../assets/images/LandingPage/footer/facebookBlack.svg'
import telegram from '../../assets/images/LandingPage/footer/telegramBlack.svg'
import instagram from '../../assets/images/LandingPage/footer/instagramBlack.svg'
import twitter from '../../assets/images/LandingPage/footer/twitterBlack.svg'
import NavbarContainer from "../../components/navbars/NavbarContainer";
import {useTranslation} from "react-i18next";




const MainPage = () => {
    const {t} = useTranslation();
    return (
        <div>
            {/*<NavbarContainer/>*/}
            <section className={s.titular}>
                <div className={s.titular__container}>
                    <div className={s.titular__topBlock + " " + s.topBlockTitular}>
                        <div className={s.topBlockTitular__content}>
                            <div className={s.topBlockTitular__blockText + " " + s.topBlockTextTitular}>
                                <h1 className={s.topBlockTextTitular__title}>{t("landingPage.firstBlock.titularOnlineTraining")}</h1>
                                <div className={s.topBlockTextTitular__description}>{t("landingPage.firstBlock.onlineTrainingSubtitle")}</div>
                            </div>
                            <div className={s.topBlockTitular__pointsBlock}>
                                <ul className={s.topBlockTitular__list + " " + s.pointsList}>
                                    <li className={s.pointsList__item}>{t("landingPage.firstBlock.point1")}</li>
                                    <li className={s.pointsList__item}>{t("landingPage.firstBlock.point2")}</li>
                                    <li className={s.pointsList__item}>{t("landingPage.firstBlock.point3")}</li>
                                </ul>
                            </div>
                            <div className={s.topBlockTitular__btn}>
                                <ButtonOrange>{t("landingPage.firstBlock.beginTraining")}</ButtonOrange>
                            </div>
                        </div>
                        <div className={s.topBlockTitular__video}>
                            <div className={s.topBlockTitular__iframeBlock}>
                                <iframe src="https://www.youtube.com/embed/EgBJmlPo8Xw"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                            <img src={notebook} alt="notebook"/>
                        </div>
                    </div>
                    <div className={s.titular__bottomBlock + " " +  s.bottomBlockTitular}>
                        <div className={s.bottomBlockTitular__media}>
                            <img src={iphone} alt="iphone"/>
                        </div>
                        <div className={s.bottomBlockTitular__content}>
                            <h2 className={s.bottomBlockTitular__title}>{t("landingPage.firstBlock.mobileTitle")}</h2>
                            <div className={s.bottomBlockTitular__text}>
                                <span>{t("landingPage.firstBlock.mobileText1")}</span>
                                <span>{t("landingPage.firstBlock.mobileText2")}</span>
                            </div>
                            <div className={s.bottomBlockTitular__icons}>
                                <img src={googlePlay} alt="googlePlay"/>
                                <img src={appStore} alt="appStore"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.story}>
                <div className={s.story__container + " _containerLanding"}>
                    <div className={s.story__mainBlock + " " + s.mainBlockStory}>
                        <h2 className={s.mainBlockStory__title}>{t("landingPage.secondBlock.title")}</h2>
                        <div className={s.mainBlockStory__description}>
                        {t("landingPage.secondBlock.subtitle")}
                        </div>
                    </div>
                    <div className={s.story__body}>
                        <div className={s.story__row}>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon1} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item1")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon2} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item2")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon3} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item3")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon4} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item4")}</div>
                                </div>
                            </div>
                        </div>
                        <div className={s.story__row}>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon5} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item5")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon6} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item6")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon7} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item7")}</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon8} alt=""/></div>
                                    <div className={s.itemStory__text}>{t("landingPage.secondBlock.item8")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.way}>
                <div className={s.way__container + " _containerLanding"}>
                    <div className={s.way__blockText + " " + s.blockTextWay}>
                        <h2 className={s.blockTextWay__title}>{t("landingPage.thirdBlock.title")}</h2>
                        <div className={s.blockTextWay__text}>{t("landingPage.thirdBlock.subtitle")}</div>
                    </div>
                    <div className={s.way__topBlock + " " + s.topBlockWay}>
                        <div className={s.topBlockWay__content + " " + s.wayContent}>
                            <div className={s.wayContent__title}>
                                <img src={dumbbell} alt="dumbbell"/>
                                <span>{t("landingPage.thirdBlock.firstBlock.title")}</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                {t("landingPage.thirdBlock.firstBlock.point1")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.firstBlock.point2")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.firstBlock.point3")}
                                </span>
                            </div>
                        </div>
                        <div className={s.topBlockWay__image}>
                            <img src={girlInGym} alt="a girl in gym"/>
                        </div>
                    </div>
                    <div className={s.way__middleBlock + " " + s.middleBlockWay}>
                        <div className={s.middleBlockWay__image}>
                            <img src={trainerWithStudent} alt="a trainer with a student"/>
                        </div>
                        <div className={s.middleBlockWay__content + " " + s.wayContent}>
                            <div className={s.wayContent__title}>
                                <img src={dumbbell} alt="dumbbell"/>
                                <span>{t("landingPage.thirdBlock.secondBlock.title")}</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                {t("landingPage.thirdBlock.secondBlock.point1")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.secondBlock.point2")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.secondBlock.point3")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.secondBlock.point4")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.way__bottomBlock + " " + s.bottomBlockWay}>
                        <div className={s.bottomBlockWay__content + " " + s.wayContent}>
                            <div className={s.wayContent__title}>
                                <img src={dumbbell} alt="dumbbell"/>
                                <span>{t("landingPage.thirdBlock.thirdBlock.title")}</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                {t("landingPage.thirdBlock.thirdBlock.point1")}
                                </span>
                                <span>
                                    {t("landingPage.thirdBlock.thirdBlock.point2")}
                                </span>
                                <span>
                                {t("landingPage.thirdBlock.thirdBlock.point3")}
                                </span>
                            </div>
                        </div>
                        <div className={s.bottomBlockWay__image}>
                            <img src={sportsmenWithPhone} alt="a sportsmen with phone"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.trainerAdvertising}>
                <div className={s.trainerAdvertising__container}>
                    <h2 className={s.trainerAdvertising__title}>{t("landingPage.fourthBlock.title")}</h2>
                    <div className={s.trainerAdvertising__body}>
                        <div className={s.trainerAdvertising__image}>
                            <img src={trainerEllipse} alt="trainer"/>
                        </div>
                        <div className={s.trainerAdvertising__content + " " + s.contentTrainerAdvertising}>
                            <h3 className={s.contentTrainerAdvertising__title}>{t("landingPage.fourthBlock.mainContent.title")}</h3>
                            <div className={s.contentTrainerAdvertising__pointsBlock}>
                                <div className={s.contentTrainerAdvertising__points}>
                                    <ul className={s.contentTrainerAdvertising__list + " " + s.pointsList}>
                                        <li className={s.pointsList__item}>{t("landingPage.fourthBlock.mainContent.point1")}</li>
                                        <li className={s.pointsList__item}>{t("landingPage.fourthBlock.mainContent.point2")}</li>
                                        <li className={s.pointsList__item}>{t("landingPage.fourthBlock.mainContent.point3")}</li>
                                        <li className={s.pointsList__item}>{t("landingPage.fourthBlock.mainContent.point4")}</li>
                                        <li className={s.pointsList__item}>{t("landingPage.fourthBlock.mainContent.point5")}</li>
                                    </ul>
                                </div>
                                <div className={s.contentTrainerAdvertising__text}>
                                    <span>{t("landingPage.fourthBlock.mainContent.interesting1")} <strong>{t("landingPage.fourthBlock.mainContent.interesting2")}</strong> {t("landingPage.fourthBlock.mainContent.interesting3")}</span>
                                    <span><em>{t("landingPage.fourthBlock.mainContent.subscriptionRegistration")}</em></span>
                                </div>
                            </div>
                            <div className={s.contentTrainerAdvertising__button}>
                                <ButtonOrange>{t("landingPage.fourthBlock.mainContent.button")}</ButtonOrange>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={s.footer}>
                <div className={s.footer__topBlock}>
                    <div className={s.footer__container + " _containerLanding"}>
                        <div className={s.footer__column}>
                            <div className={s.footer__body}>
                                <div className={s.footer__logo}>
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div className={s.footer__images}>
                                    <img src={googlePlay} alt="googlePlay"/>
                                    <img src={appStore} alt="appStore"/>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__column + " " + s.footer__column_text}>
                            <div className={s.footer__body}>
                                <h5 className={s.footer__title}>Quick Links</h5>
                                <div className={s.footer__text}>
                                    <span>{t("landingPage.footerBlock.main")}</span>
                                    <span>{t("landingPage.footerBlock.demo")}</span>
                                    <div className={s.footer__languageContainer}>
                                        <span>{t("landingPage.footerBlock.ukrainian")}</span>
                                        <img src={ukraine} alt="ukraine"/>
                                    </div>
                                    <div className={s.footer__languageContainer}>
                                        <span>{t("landingPage.footerBlock.english")}</span>
                                        <img src={usa} alt="usa"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__column + " " + s.footer__column_text}>
                            <div className={s.footer__body}>
                                <h5 className={s.footer__title}>Quick Links</h5>
                                <div className={s.footer__text}>
                                    <span>{t("landingPage.footerBlock.services")}</span>
                                    <span>{t("landingPage.footerBlock.programs")}</span>
                                    <span>{t("landingPage.footerBlock.trainers")}</span>
                                    <span>{t("landingPage.footerBlock.contacs")} </span>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__column + " " + s.footer__column_text + " " + s.footer__column_textLast}>
                            <div className={s.footer__body}>
                                <h5 className={s.footer__title}>Get In Touch</h5>
                                <div className={s.footer__textGetIntouch}>
                                    <div className={s.footer__infoTextContainer}>
                                        <img src={mail} alt="mail"/>
                                        <span>gymby.support@gmail.com</span>
                                    </div>
                                    <div className={s.footer__infoTextContainer}>
                                        <img src={phone} alt="phone"/>
                                        <span>+380-123-45-67</span>
                                    </div>
                                    <div className={s.footer__infoTextContainer}>
                                        <img src={global} alt="global"/>
                                        <span>gymby.com</span>
                                    </div>
                                </div>
                                <div className={s.footer__contactIcons}>
                                    <img src={facebook} alt="facebook"/>
                                    <img src={telegram} alt="telegram"/>
                                    <img src={instagram} alt="instagram"/>
                                    <img src={twitter} alt="twitter"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.footer__bottomBlock}>
                    <div className={s.footer__rights}>
                        © All rights reserved. Created by Gymby team
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;