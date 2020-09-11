import React from 'react'; 
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

import './header.css';

const Header = (props) => {

    const navBars = () => (
        <div className="bars">
            <FontAwesome name="ban"
             style={{ color:'white', padding:'10px', cursor:'pointer' }}
             onClick={props.onOpenNav} />
        </div>
    )

    const logo = () => 
         (
            <Link to="/" className="logo">
                <img alt="NBA logo" src="/images/nba_logo.png" />
            </Link>
        )
  



    return(
        <header className="header">
            <SideNav {...props} />
           <div className="headerOpt">
               {navBars()}
                {logo()}
           </div>
        </header>

        )
}

export default Header;