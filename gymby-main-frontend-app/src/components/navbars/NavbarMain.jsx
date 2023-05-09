import React, {useEffect} from 'react';
import s from "./NavbarMain.module.scss";
import logo from "../../assets/images/general/logo_web.svg";
import IconUkr from "../UI/icons/IconUKR";
import IconUsa from "../UI/icons/IconUSA";
import userCabinetIcon from "../../assets/images/general/userCabinetIcon.svg";
import {Link, NavLink} from "react-router-dom";
import {
    DIARY_ROUTE,
    HOME_ROUTE,
    MEASUREMENTS_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE,
    USER_ACCOUNT_ROUTE
} from "../../utils/routes/consts";
import {useTranslation} from "react-i18next";


const NavbarMain = ({toggleBurgerMenu, menuBody,
                        isActiveUABtn, isActiveENGBtn,
                        UAButtonStateHandler, ENGButtonStateHandler}) => {
    const {t} = useTranslation();

    return (
        <header className={s.header}>
            <div className={s.header__container + " _containerLanding"}>
                <NavLink to={HOME_ROUTE} className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <div className={s.burgerMenu} onClick={toggleBurgerMenu}><span></span></div>
                <nav className={`${s.header__menu} ${s.menu}`} ref={menuBody}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}>
                            <NavLink to={DIARY_ROUTE}
                                     className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}
                            >Щоденник</NavLink>
                        </li>

                        <li className={s.menu__item}><a href="" className={s.menu__link}>Програми</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Статистика</a></li>

                        <li className={s.menu__item}>
                            <NavLink to={MEASUREMENTS_ROUTE}
                                     className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}
                            >Заміри тіла</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.header__generalRightBlock}></div>
                <div className={s.header__iconsBody}>
                    <IconUkr onClick={() => UAButtonStateHandler('ua')} isActive={isActiveUABtn}/>
                    <IconUsa onClick={() => ENGButtonStateHandler('eng')} isActive={isActiveENGBtn}/>
                </div>
                <NavLink to={USER_ACCOUNT_ROUTE} className={({isActive}) => isActive ? s.activeCabinet + " " + s.header__iconCabinet : s.header__iconCabinet}>
                    <img src={userCabinetIcon} alt="cabinet"/>
                </NavLink>
            </div>
            <div className={s.hrContainer}><hr className={s.hr}/></div>
        </header>

    );
};

export default NavbarMain;