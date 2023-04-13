import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App"
import SignIn from "./Components/SignIn/SignIn"
import SignUp from "./Components/SignIn/SignUp"
import Home from "./Components/Content/Home/Home";
import News from "./Components/Content/News/News"
import NewDetail from "./Components/Content/NewDetail/NewDetail"
import ProductDetail from './Components/Content/ProductDetail/ProductDetail'
import ProductList from './Components/Content/ProductList/ProductList'
import AddProduct from './Components/Content/AddProduct/AddProduct'
import EditProduct from "./Components/Content/EditProduct/EditProduct"
import Account from './Components/Content/Account/Account'
import Cart from './Components/Content/Cart/Cart'
import About from './Components/Content/About/About'
import AddNew from './Components/Content/AddNew/AddNew'
import NotFound from "./Components/Content/NotFound/NotFound";
import { UserProvider } from "./Contexts/UserContext";
import EditNew from "./Components/Content/EditNew/EditNew";

import './index.css'
import 'animate.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <React.StrictMode>
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />}></Route>
                        <Route path="account/:id" element={<Account/>}></Route>
                        <Route path="products">
                            <Route index element={<ProductList/>}></Route>
                            <Route path=":brand" element={<ProductList/>}></Route>
                            <Route path=":brand/:id" element={<ProductDetail/>}></Route>
                            <Route path="add" element={<AddProduct />}></Route>
                            <Route path="edit/:id" element={<EditProduct />}></Route>
                        </Route>
                        <Route path="news">
                            <Route index element={<News/>}></Route>
                            <Route path=":id" element={<NewDetail/>}></Route>
                            <Route path="add/:userid" element={<AddNew/>}></Route>
                            <Route path="edit/:id" element={<EditNew/>}></Route>
                        </Route>
                        <Route path="cart" element={<Cart />}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Route>
                    <Route path="signin" element={<SignIn/>}></Route>
                    <Route path="signup" element={<SignUp/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    </React.StrictMode>
)