import React from 'react';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

const LayoutContainer = () => {
    sessionStorage.setItem('isAuthorized', 'false');
    return <BrowserRouter><Layout /></BrowserRouter>;
};

export default LayoutContainer;
