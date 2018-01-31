import React from 'react';
import { injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';

/* eslint-disable */
injectGlobal`
  * {
      box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
`;
/* eslint-enable */

const Layout = ({ children }) => <div> {children()} </div>;

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
