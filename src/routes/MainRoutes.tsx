import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import("../pages/HomePage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const DishPage = lazy(() => import("../pages/DishPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const ConstructorPage = lazy(() => import("../pages/ConstructorPage"));
const CollagenPage = lazy(() => import("../pages/CollagenPage"));
const CoffePage = lazy(() => import("../pages/CoffePage"));
const TeaPage = lazy(() => import("../pages/TeaPage"));
const DrinksPage = lazy(() => import("../pages/DrinksPage"));






function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/categories' element={<CategoryPage />} />
                <Route path='/dish/:id' element={<DishPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/constructor' element={<ConstructorPage />} />
                <Route path='/collagen' element={<CollagenPage />} />
                <Route path='/coffe' element={<CoffePage />} />
                <Route path='/tea' element={<TeaPage />} />
                <Route path='/drinks' element={<DrinksPage />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes