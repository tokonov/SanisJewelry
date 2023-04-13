import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import ProductListPage from '../pages/productListPage/ProductListPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route element={<MainRoutes/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/productList' element={<ProductListPage/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes