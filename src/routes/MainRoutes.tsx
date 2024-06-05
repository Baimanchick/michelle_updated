import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import("../pages/HomePage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const DishPage = lazy(() => import("../pages/DishPage"));




function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/categories' element={<CategoryPage />} />
                <Route path='/dish/:id' element={<DishPage />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes