import React from 'react';
import { useStylesLayout } from './LayoutStyle';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({
  children
}) => {
  const classes = useStylesLayout();

  return (
    <div className={classes.layout}>
      <Header/>

      <div className={classes.layout__content}>
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;