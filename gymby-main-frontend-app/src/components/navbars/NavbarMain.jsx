import React from 'react';
import s from "./NavbarLanding.module.scss";
import logo from "../../assets/images/general/logo_web.svg";
import IconUkr from "../UI/icons/IconUKR";
import IconUsa from "../UI/icons/IconUSA";
import userCabinetIcon from "../../assets/images/general/userCabinetIcon.svg";


const NavbarMain = ({toggleBurgerMenu, menuBody}) => {
    return (
        <header className={s.header}>
            <div className={s.header__container + " _container"}>
                <a href="#" className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                </a>
                <div className={s.burgerMenu} onClick={toggleBurgerMenu}><span></span></div>
                <nav className={`${s.header__menu} ${s.menu}`} ref={menuBody}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Щоденник</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Програми</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Статистика</a></li>
                        <li className={s.menu__item}><a href="" className={s.menu__link}>Заміри тіла</a></li>
                    </ul>
                </nav>
                <div className={s.header__generalRightBlock}></div>
                <div className={s.header__iconsBody}>
                    <IconUkr/>
                    <IconUsa/>
                </div>
                <div className={s.header__buttonsBody}>
                    <img src={userCabinetIcon} alt="cabinet"/>
                </div>

            </div>
        </header>
    );
};

export default NavbarMain;