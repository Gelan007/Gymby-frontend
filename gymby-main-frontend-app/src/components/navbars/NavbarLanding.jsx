import React, {useRef, useState} from 'react';
import s from './NavbarLanding.module.scss'
import IconUkr from "../UI/icons/IconUKR";
import IconUsa from "../UI/icons/IconUSA";
import logo from '../../assets/images/general/logo_web.svg'
import ButtonOrange from "../UI/buttons/ButtonOrange";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/routes/consts";
import { useTranslation } from 'react-i18next';

const NavbarLanding = ({toggleBurgerMenu, menuBody, login,
                           UAButtonStateHandler, ENGButtonStateHandler,
                           isActiveUABtn, isActiveENGBtn
}) => {
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
                        <li className={s.menu__item}><a href="" className={s.menu__link}>{t("navbarLanding.servises")}</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>{t("navbarLanding.programs")}</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>{t("navbarLanding.coaching")}</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>{t("navbarLanding.contacts")}</a></li>
                    </ul>
                </nav>
                <div className={s.header__generalRightBlock}></div>
                <div className={s.header__iconsBody}>
                    <IconUkr onClick={() => UAButtonStateHandler('ua')} isActive={isActiveUABtn}/>
                    <IconUsa onClick={() => ENGButtonStateHandler('eng')} isActive={isActiveENGBtn}/>
                </div>
                <div className={s.header__buttonsBody}>
                    <ButtonOrange onClick={() => login()}>{t("navbarLanding.enter")}</ButtonOrange>
                    {/*<ButtonOrange>Реєстрація</ButtonOrange>*/}
                </div>
            </div>
        </header>
    );
};

export default NavbarLanding;