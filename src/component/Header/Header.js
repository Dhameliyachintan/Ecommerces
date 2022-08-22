
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import Alert from '../Alert/Alert';



function Header(props) {

    // const theme = useContext(ThemeContext)
    // console.log(theme);

    const theme = useContext(ThemeContext)
    console.log(theme);

    return (
        <>
            <header className="theam-color">
                <nav className={`navbar navbar-expand-lg ${theme.theme}`}>
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="image/logo.svg" alt className="img-fluid" />
                        </a>
                        <button onClick={() => theme.toggle_theme(theme.theme)}>change Theme</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                            <i className="fa-solid fa-grip-lines fs-3 text-dark"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between w-100 align-items-center" id="menu">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" aria-current="page" href="Home.html">Home<i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i>
                                    </a> */}
                                    <NavLink exact to={"/Home"} ClassName="nav-link scrollto active">Home <i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>
                                </li>

                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="About.html">About <i className="fa fa-angle-down ms-2"
                                        aria-hidden="true"></i></a> */}
                                    <NavLink exact to={"/About"} ClassName="nav-link scrollto active">About <i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="Pages.html">Pages<i className="fa fa-angle-down ms-2"
                                        aria-hidden="true"></i></a> */}
                                    <NavLink exact to={"/Cardpage"} ClassName="nav-link scrollto active">Cardpage <i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>

                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="shope.html">Shop<i className="fa fa-angle-down ms-2"
                                        aria-hidden="true"></i></a> */}
                                    <NavLink exact to={"/Shope"} ClassName="nav-link scrollto active">Shop <i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="blog.html">Blog<i className="fa fa-angle-down ms-2"
                                        aria-hidden="true"></i></a> */}
                                    <NavLink exact to={"/Blog"} ClassName="nav-link scrollto active">Blog <i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>

                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="Contact.html">Contact</a> */}
                                    <NavLink exact to={"/Product"} ClassName="nav-link scrollto active">Product<i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link text-dark" href="Contact.html">Login</a> */}
                                    <NavLink exact to={"/Login"} ClassName="nav-link scrollto">Login<i
                                        className="fa fa-angle-down ms-2" aria-hidden="true"></i></NavLink>
                                </li>
                            </ul>




                            <div className="social-icon d-flex">
                                <a href="#"><i className="fa fa-search text-dark px-2" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-user text-dark px-2" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-heart text-dark px-2" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-shopping-bag text-dark px-2" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Alert />
        </>


    );
}

export default Header;