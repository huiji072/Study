import React, { Component } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from '../login/Login';
import ItemForm from '../item/ItemForm';
import ItemDtl from '../item/ItemDtl';
import CartList from '../cart/CartList';
import OrderHist from '../order/OrderHist';
import OfferHist from '../offer/OfferHist';
import Join from '../login/Join';
import Main from '../main/Main';
import ItemMng from '../item/ItemMng';
import ItemList from '../main/ItemList';

class Header extends Component {
    render() {
        return(
            <>
            
            <div class="titleHeader">
                <h1><a class="title" href="/main/ItemList">❝Donators Market❞</a></h1> <br/>
            </div>

            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/main/ItemList">DonatorsMarket</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/item/ItemForm">상품등록</Nav.Link>
                    <Nav.Link href="/item/ItemMng">상품관리</Nav.Link>
                    <Nav.Link href="/cart/CartList">장바구니</Nav.Link>
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
                    <Route path='/Main/main' element={<Main/>} />
                    <Route path='/item/ItemForm' element={<ItemForm/>} />
                    <Route path='/item/ItemMng' element={<ItemMng/>} />
                    <Route path='/cart/CartList' element={<CartList/>} />
                    <Route path='/order/OrderHist' element={<OrderHist/>} />
                    <Route path='/offer/OfferHist' element={<OfferHist/>} />
                    <Route path='/login/Login' element={<Login/>} />
                    <Route path='/login/Join' element={<Join/>} />
                </Routes>
            </Router>
            </>
        );
    }
}


export default Header;