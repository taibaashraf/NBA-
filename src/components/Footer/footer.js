import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

import './footer.css';

const Footer = () => (

    <div className="footer">
        <Link to="/" className="logo">
            <img alt="NBA logo" src="/images/nba_logo.png" />
        </Link>
        <div className="right">
            @NBS {CURRENT_YEAR } All rights reserved.
        </div>

    </div>

)



export default Footer;