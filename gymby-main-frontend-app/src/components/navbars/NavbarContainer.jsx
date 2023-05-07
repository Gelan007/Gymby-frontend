import React, {useEffect, useRef, useState} from 'react';
import NavbarLanding from "./NavbarLanding";
import NavbarMain from "./NavbarMain";
import {connect} from "react-redux";
import {setIsActiveENGBtn, setIsActiveUABtn} from '../../redux/slices/language-slice'
import {useOidc} from "@axa-fr/react-oidc";
import {setIsAuth} from "../../redux/reducers/auth-reducer";

const NavbarContainer = (props) => {
    const [burgerMenuState, setBurgerMenuState] = useState(true);
    const menuBody = useRef(null);
    const { login, isAuthenticated } = useOidc();

    useEffect(()  => {
        props.setIsAuth(isAuthenticated)
    }, [isAuthenticated])

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
            {props.isAuth ?
                <NavbarMain toggleBurgerMenu={toggleBurgerMenu}
                                        menuBody={menuBody}
                                        isActiveUABtn={props.isActiveUABtn}
                                        isActiveENGBtn={props.isActiveENGBtn}
                                        setIsActiveENGBtn = {props.setIsActiveENGBtn}
                                        setIsActiveUABtn = {props.setIsActiveUABtn}
            />
                :
                <NavbarLanding toggleBurgerMenu={toggleBurgerMenu}
                               menuBody={menuBody}
                               login={login}
                />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isActiveUABtn: state.language.isActiveUABtn,
        isActiveENGBtn: state.language.isActiveENGBtn,
        setIsAuth: state.auth.setIsAuth,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
    {setIsActiveUABtn, setIsActiveENGBtn, setIsAuth})(NavbarContainer);