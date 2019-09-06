import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="bg-light-grey govtSite">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="img/national-icon.png" alt=""/>
                            A Singapore Government Agency Website
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row paddingTop10 paddingBottom10">
                        <div className="col-md-3">
                            <a href="!#"><img src="img/logo.png" alt="" style={{ width: "160px"}} /></a>
                        </div>
                        <div className="col-md-9 text-right">
                            <ul className="headerRHS">
                                <li>
                                    <ul className="fontIncrease">
                                        <li><a className="smallFont" href="!#">A</a></li>
                                        <li><a className="mediumFont" href="!#">A</a></li>
                                        <li><a className="bigFont" href="!#">A</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <img src="img/icons/avatar.svg" style={{ width: "35px", paddingRight:"5px" }} alt=""/><div className="userName">Ben Wong</div>
                                </li>
                                <li><img src="img/icons/bell.svg" alt="" style={{ width: "25px" }} /></li>
                                <li className="ipadNavCont">
                                    <div className="ipadNav">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
