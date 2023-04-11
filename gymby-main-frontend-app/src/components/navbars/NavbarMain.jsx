import React from 'react';
import s from "./NavbarMain.module.scss";
import logo from "../../assets/images/general/logo_web.svg";
import IconUkr from "../UI/icons/IconUKR";
import IconUsa from "../UI/icons/IconUSA";
import userCabinetIcon from "../../assets/images/general/userCabinetIcon.svg";
import {Link, NavLink} from "react-router-dom";
import {HOME_ROUTE, USER_ACCOUNT_PERSONAL_DATA_ROUTE} from "../../utils/routes/consts";


const NavbarMain = ({toggleBurgerMenu, menuBody}) => {
    return (
        <header className={s.header}>
            <div className={s.header__container + " _containerLanding"}>
                <NavLink to={HOME_ROUTE} className={s.header__logo}>
                    <img src={logo} alt="logo"/>
                </NavLink>
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
                <Link to={USER_ACCOUNT_PERSONAL_DATA_ROUTE} className={s.header__iconCabinet}>
                    <img src={userCabinetIcon} alt="cabinet"/>
                </Link>
            </div>
            <div className={s.hrContainer}><hr className={s.hr}/></div>

        </header>

    );
};

export default NavbarMain;