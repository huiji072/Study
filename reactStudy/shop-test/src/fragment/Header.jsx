import React, { Component } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from '../login/Login';
import ItemForm from '../item/ItemForm';
import ItemDtl from '../item/ItemDtl';
import Cart from '../cart/Cart';
import OrderHist from '../order/OrderHist';
import OfferHist from '../offer/OfferHist';
import Join from '../login/Join';
import Main from '../main/Main';
import ItemMng from '../item/ItemMng';
import MainList from '../main/MainList';
import ItemMngList from '../item/ItemMngList';
import CartList from '../cart/CartList';
import OrderHistList from '../order/OrderHistList';
import OfferHistList from '../offer/OfferHistList';
import Hello from '../test/Hello';
import ItemDtlTest from '../test/ItemDtlTest';
import LoginSuccess from '../login/LoginSuccess';

class Header extends Component {
    render() {
        return(
            <>
            
            <div class="titleHeader">
                <h1><a class="title" href="/">❝Donators Market❞</a></h1> <br/>
            </div>

            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/item/ItemForm">상품등록</Nav.Link>
                    <Nav.Link href="/item/ItemMng">상품관리</Nav.Link>
                    <Nav.Link href="/cart/Cart">장바구니</Nav.Link>
                    <Nav.Link href="/order/OrderHist">구매이력</Nav.Link>
                    <Nav.Link href="/offer/OfferHist">판매이력</Nav.Link>
                    <Nav.Link href="/login/Login">로그인</Nav.Link>
                    <Nav.Link href="/login/Join">회원가입</Nav.Link>
                    {/* <Nav.Link href="/members/management">회원관리</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/item/ItemForm' element={<ItemForm/>} />
                    <Route path='/item/ItemMng' element={<ItemMng/>} />
                    <Route path='/cart/Cart' element={<Cart/>} />
                    <Route path='/order/OrderHist' element={<OrderHist/>} />
                    <Route path='/offer/OfferHist' element={<OfferHist/>} />
                    <Route path='/login/Login' element={<Login/>} />
                    <Route path='/login/Join' element={<Join/>} />
                    <Route path='/:itemId' element={<ItemDtl/>} />
                    {/* <Route path='/:itemId' element={<Comment/>} /> */}
                    <Route path='/test/Hello' element={<Hello/>} />
                    <Route path='/test/itemDtlTest' element={<ItemDtlTest/>} />
                    <Route path='/login/success' element={<LoginSuccess/>} />
                </Routes>
            </Router>
            </>
        );
    }
}


export default Header;