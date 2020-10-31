import React from 'react';
import { Link } from 'react-router-dom';
// import { siteConfig } from "../../settings";

import logo from '../../image/logo/n1.png';
import logosmall from '../../image/logo/n2.png';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              {/* <i className={siteConfig.siteIcon} /> */}
              <img src={logosmall} width="30" alt="Site Icon" />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            {/* <div class="sc-logo-header logo"></div> */}
            <img src={logo} width="150" alt="Transact Logo" />
          </Link>
        </h3>
      )}
    </div>
  );
};
