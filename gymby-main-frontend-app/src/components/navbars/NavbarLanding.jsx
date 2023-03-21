import React, {useRef, useState} from 'react';
import s from './NavbarLanding.module.scss'

import IconUkr from "../UI/icons/IconUKR";
import IconUsa from "../UI/icons/IconUSA";
import logo from '../../assets/images/LandingPage/general/logo_web.svg'
import ButtonOrange from "../UI/buttons/ButtonOrange";

const NavbarLanding = () => {
    const [burgerMenuState, setBurgerMenuState] = useState(true);
    const menuBody = useRef(null);

    function toggleBurgerMenu() {
        if(!burgerMenuState) {
            menuBody.current.style.top = '-100%';
            setBurgerMenuState(true);
        } else {
            menuBody.current.style.top = '0';
            setBurgerMenuState(false);
        }
    }

    return (
        <header className={s.header}>
            <div className={s.header__container + " _container"}>
                <a href="#" className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                </a>
                <div className={s.burgerMenu} onClick={toggleBurgerMenu}><span></span></div>
                <nav className={`${s.header__menu} ${s.menu}`} ref={menuBody}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Послуги</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Програми</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Тренерство</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Контакти</a></li>
                    </ul>
                </nav>
                <div className={s.header__generalRightBlock}></div>
                    <div className={s.header__iconsBody}>
                        <IconUkr/>
                        <IconUsa/>
                    </div>
                    <div className={s.header__buttonsBody}>
                        <ButtonOrange>Вхід</ButtonOrange>
                        <ButtonOrange>Реєстрація</ButtonOrange>
                    </div>

            </div>
        </header>
    );
};

export default NavbarLanding;