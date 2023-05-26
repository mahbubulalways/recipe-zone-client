import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ShowTheme from '../Theme/ShowTheme';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <ShowTheme></ShowTheme>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;