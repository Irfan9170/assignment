import logo from '../../images/soprano-ai-2@2x.png';
import {NavLink} from 'react-router-dom';
import React from 'react';
import '../../styles/style.css';

const Header = (props)=>{
    return(
      <>
        <div className="container-center-horizontal">
            <div className="home screen">
              <div className="navbar">
              <img
                className="soprano-ai-2"
                src={logo}
                alt="logo"
              />
              <div className="group-1">
                <div className="flex-col">
                  <div className="place poppins-bold-fuchsia-12px">Home</div>
                  <div className="rectangle-2"></div>
                </div>
                <div className="products poppins-bold-black-12px">Products</div>
                <div className="about-me poppins-bold-black-12px"><NavLink to="" className="poppins-bold-black-12px" >About Me</NavLink></div>
                <div className="demos poppins-bold-black-12px">Demos</div>
                <div className="contact-us poppins-bold-black-12px">Contact Us</div>
              </div>
            </div>
            </div>
            </div>
</>
    )
}

export default Header;
