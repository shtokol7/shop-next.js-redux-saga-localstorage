import React from 'react';
import { useStylesLayout } from './LayoutStyle';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StickyBox from "react-sticky-box";

const Layout = ({
  children
}) => {
  const classes = useStylesLayout();

  return (
    <div className={classes.layout} id="layout">
      <StickyBox offsetTop={0} offsetBottom={20} style={{zIndex: '100'}}>
        <Header/>
      </StickyBox>

      <div className={classes.layout__content}>
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;