import React, { useEffect }  from 'react';
import $ from 'jquery';
import '../../styles/nav.scss';
import logo from '../../assets/images/logo.png';

const Nav = () => {

    useEffect(() => {
        $(document).scroll(function() {
            if($(window).scrollTop() > 10) {

             $(".header").css("background","#fcfcfc");

 
            }else if($(window).scrollTop() < 50){
             $(".header").css("background","transparent");
            }
        });

    });

    return (
        <header className="header">
            <a href="" className="logo"><img src={logo}></img></a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="#shop">🛒 Shop</a></li>
                <li><a href="#party">🎉 Host a Party</a></li>
                <li><a href="#careers">🥗 Recipes</a></li>
                <li><a href="#careers">Your Account</a></li>
            </ul>
        </header>
    )
};

export default Nav;
