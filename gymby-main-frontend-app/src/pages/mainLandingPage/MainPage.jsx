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




const MainPage = () => {
    return (
        <div>
            {/*<NavbarContainer/>*/}
            <section className={s.titular}>
                <div className={s.titular__container}>
                    <div className={s.titular__topBlock + " " + s.topBlockTitular}>
                        <div className={s.topBlockTitular__content}>
                            <div className={s.topBlockTitular__blockText + " " + s.topBlockTextTitular}>
                                <h1 className={s.topBlockTextTitular__title}>Онлайн-тренування з особистим тренером</h1>
                                <div className={s.topBlockTextTitular__description}>Є можливість займатися за допомогою веб- або мобільного застосунку.</div>
                            </div>
                            <div className={s.topBlockTitular__pointsBlock}>
                                <ul className={s.topBlockTitular__list + " " + s.pointsList}>
                                    <li className={s.pointsList__item}>Привести тіло до тонусу;</li>
                                    <li className={s.pointsList__item}>Зарядитись енергією;</li>
                                    <li className={s.pointsList__item}>Покращити стан здоров’я.</li>
                                </ul>
                            </div>
                            <div className={s.topBlockTitular__btn}>
                                <ButtonOrange>Розпочати тренування</ButtonOrange>
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
                            <h2 className={s.bottomBlockTitular__title}>Швидке та просте створення облікового запису</h2>
                            <div className={s.bottomBlockTitular__text}>
                                <span>Ви можете подумати, що це так само, як будь-яке інше створення облікового запису… довге, виснажливе та сповнене нескінченних полів для заповнення. Але це не так.</span>
                                <span>Ми розробили весь процес так, щоб зробити його найпростішим і найкоротшим, будь-коли задуманим для особистого облікового запису. Завантажте застосунок і переконайтеся самі!</span>
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
                        <h2 className={s.mainBlockStory__title}>Що таке Gymby?</h2>
                        <div className={s.mainBlockStory__description}>
                            Виведіть вашу взаємодію з тренером на новий рівень. Отримуйте програму тренувань від тренера у свій особистий календар, разом відстежуйте прогрес, спостерігайте за статистикою і проводьте виміри тіла. Створюйте своє тіло мрії вже зараз!
                        </div>
                    </div>
                    <div className={s.story__body}>
                        <div className={s.story__row}>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon1} alt=""/></div>
                                    <div className={s.itemStory__text}>Щоденник тренувань</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon2} alt=""/></div>
                                    <div className={s.itemStory__text}>100+ тренувальних вправ</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon3} alt=""/></div>
                                    <div className={s.itemStory__text}>Корисна статистика</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon4} alt=""/></div>
                                    <div className={s.itemStory__text}>Відстежуйте рекорди</div>
                                </div>
                            </div>
                        </div>
                        <div className={s.story__row}>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon5} alt=""/></div>
                                    <div className={s.itemStory__text}>20+ безкоштовних програм тренувань</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon6} alt=""/></div>
                                    <div className={s.itemStory__text}>Зрозумілий інтерфейс</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon7} alt=""/></div>
                                    <div className={s.itemStory__text}>Мобільний застосунок</div>
                                </div>
                            </div>
                            <div className={s.story__column}>
                                <div className={s.story__item + " " + s.itemStory}>
                                    <div className={s.itemStory_icon}><img src={storyIcon8} alt=""/></div>
                                    <div className={s.itemStory__text}>Взаємодія з тренером</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.way}>
                <div className={s.way__container + " _containerLanding"}>
                    <div className={s.way__blockText + " " + s.blockTextWay}>
                        <h2 className={s.blockTextWay__title}>Обери свій шлях</h2>
                        <div className={s.blockTextWay__text}>Програми</div>
                    </div>
                    <div className={s.way__topBlock + " " + s.topBlockWay}>
                        <div className={s.topBlockWay__content + " " + s.wayContent}>
                            <div className={s.wayContent__title}>
                                <img src={dumbbell} alt="dumbbell"/>
                                <span>Безкоштовна програма тренувань</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                    Обери собі програму тренувань з 20+ запропонованих безкоштовних програм, створених спеціалістами, та імпортуйте в свій особистий календар тренувань;
                                </span>
                                <span>
                                    Кожна програма дозволить Вам вдосконалити своє тіло опираючись на вже створений та продуманий графік тренувань;
                                </span>
                                <span>
                                    Усі програми орієнтовані на людей котрі мають різні  можливості та цілі. Отже, Ви зможете обрати ту програму, котра буде ідеально підходити саме Вам.
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
                                <span>Програма з особистим тренером</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                    Обери свого персонального тренера та почни створювати своє ідеальне тіло під наглядом професіонала;
                                </span>
                                <span>
                                    Тренери можуть виставляти свої авторські платні програми тренувань або створювати їх особисто для Вас;
                                </span>
                                <span>
                                    З вашої згоди тренер може вносити виправлення у ваш календар тренувань;
                                </span>
                                <span>
                                    Для максимально корисного та безпечного тренування заняття з тренером буде найефективнішим вибором.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.way__bottomBlock + " " + s.bottomBlockWay}>
                        <div className={s.bottomBlockWay__content + " " + s.wayContent}>
                            <div className={s.wayContent__title}>
                                <img src={dumbbell} alt="dumbbell"/>
                                <span>Особиста програма тренувань</span>
                            </div>
                            <div className={s.wayContent__text}>
                                <span>
                                    Складай план тренувань самостійно та тренуйся ефективніше;
                                </span>
                                <span>
                                    Саме дана функція дозволить Вам створювати персональний план тренування, котрий дасть змогу прокачувати власне тіло з максимально зручним для Вас розпорядком часу;
                                </span>
                                <span>
                                    Створення особистої програми не займає багато часу та дозволяє зручно поєднати тренування з усіма повсякденними справами.
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
                    <h2 className={s.trainerAdvertising__title}>Бажаєш стати тренером та маєш необхідну освіту? </h2>
                    <div className={s.trainerAdvertising__body}>
                        <div className={s.trainerAdvertising__image}>
                            <img src={trainerEllipse} alt="trainer"/>
                        </div>
                        <div className={s.trainerAdvertising__content + " " + s.contentTrainerAdvertising}>
                            <h3 className={s.contentTrainerAdvertising__title}>Можливості тренера:</h3>
                            <div className={s.contentTrainerAdvertising__pointsBlock}>
                                <div className={s.contentTrainerAdvertising__points}>
                                    <ul className={s.contentTrainerAdvertising__list + " " + s.pointsList}>
                                        <li className={s.pointsList__item}>Можливість створювати свої платні програми тренувань та виставляти їх до загального списку програм;</li>
                                        <li className={s.pointsList__item}>Створення тренування індивідуально для учня;</li>
                                        <li className={s.pointsList__item}>Взаємодія з календарем тренувань учня;</li>
                                        <li className={s.pointsList__item}>Редагування плана тренувань учня;</li>
                                        <li className={s.pointsList__item}>Відстеження прогресу своїх учнів.</li>
                                    </ul>
                                </div>
                                <div className={s.contentTrainerAdvertising__text}>
                                    <span>Зацікавило? Тоді <strong>ставай тренером</strong> вже зараз!</span>
                                    <span><em>Офомлення підписки доступно в особистому кабінеті.</em></span>
                                </div>
                            </div>
                            <div className={s.contentTrainerAdvertising__button}>
                                <ButtonOrange>Стати тренером</ButtonOrange>
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
                                    <span>На головну</span>
                                    <span>Демо</span>
                                    <div className={s.footer__languageContainer}>
                                        <span>Українська</span>
                                        <img src={ukraine} alt="ukraine"/>
                                    </div>
                                    <div className={s.footer__languageContainer}>
                                        <span>Англійська</span>
                                        <img src={usa} alt="usa"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__column + " " + s.footer__column_text}>
                            <div className={s.footer__body}>
                                <h5 className={s.footer__title}>Quick Links</h5>
                                <div className={s.footer__text}>
                                    <span>Послуги</span>
                                    <span>Програми</span>
                                    <span>Тренерство</span>
                                    <span>Контакти </span>
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