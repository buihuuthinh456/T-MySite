import React from 'react';

import { Route,Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage';

import LoginPage from '../pages/LoginPage';

import ProjectPage from '../pages/ProjectPage';

import EditPage from '../pages/EditPage';

import FuturePage from '../pages/FuturePage/FuturePage';



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/future" element={<FuturePage />} />

        </Routes>
    );
};



export default Router;
