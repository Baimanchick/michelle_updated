import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import("../pages/HomePage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));



function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/categories' element={<CategoriesPage />} />

            </Route>
        </Routes>
    )
}

export default MainRoutes