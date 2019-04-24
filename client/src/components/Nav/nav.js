import React, { useEffect }  from 'react';
import $ from 'jquery';
// import '../../styles/nav.scss';

const Nav = () => {

    useEffect(() => {
        $(document).scroll(function() {
            if($(window).scrollTop() > 10) {

             $(".header").css("background","#0088F4");

 
            }else if($(window).scrollTop() < 50){
             $(".header").css("background","transparent");
            }
        });

    });

    return (
        <header className="header">
            <a href="" className="logo">Tegus</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="#solution">Solution</a></li>
                <li><a href="#foradvisors">For Advisors</a></li>
                <li><a href="#careers">312-423-6747</a></li>
            </ul>
        </header>
    )
};

export default Nav;