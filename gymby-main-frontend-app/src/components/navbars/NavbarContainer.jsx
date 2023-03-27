import React, {useRef, useState} from 'react';
import NavbarLanding from "./NavbarLanding";
import NavbarMain from "./NavbarMain";

const NavbarContainer = () => {
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
        <div>
            {/*тут можно создать еще доп компоненту, и NavbarContainer будет
            отрисовывать её одну. А эта компонетна уже будет отрисовывать и передавать значения в оба навбара
            в зависимоти от переданного значения isLogin. Но можно и тут сразу это проверять и обе отрисоывать от условия */}
            <NavbarLanding toggleBurgerMenu={toggleBurgerMenu} menuBody={menuBody}/>
            {/*<NavbarMain toggleBurgerMenu={toggleBurgerMenu} menuBody={menuBody}/>*/}
        </div>
    );
};

export default NavbarContainer;