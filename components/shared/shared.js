import React from 'react';
import Footer from './footer';
import NavigationBar from './navigationBar';

const Shared = ({ children }) => {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};

export default Shared;