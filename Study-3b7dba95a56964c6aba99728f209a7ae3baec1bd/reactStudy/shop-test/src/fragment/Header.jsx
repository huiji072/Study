import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Login from '../login/Login';
import ItemForm from '../item/ItemForm';
import ItemDtl from '../item/ItemDtl';
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
import ItemDtlTest from '../test/ItemDtlTest';
import ItemFormTest from '../test/ItemFormTest';
import ItemUpdate from '../item/ItemUpdate';
import CheckboxTest from '../test/CheckboxTest';
import PaginationTest from '../test/PaginationTest';
import Logout from '../login/Logout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MemberManagement from '../management/MemberManagement';


function Header() {
    const [ loginInfo, setLoginInfo ] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    // 변수 초기화
    function callback(str) {
      setLoginInfo(str);
    }
    useEffect(
        () => {
          axios({
              url: '/members/loginInfo',
              method: 'GET',
          }).then((res) => {
              callback(res.data);
              console.log(res.data);
              setEmail(res.data.email);
              setRole(res.data.role[0].authority)
          })
        }, []
    );

    return(
        <>
        
        <div class="titleHeader">
            <h1><a class="title" href="/">❝Donators Market❞</a></h1> <br/>
        </div>
        <div>
            {
                email == 'anonymousUser'
                ? <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cart/Cart">장바구니</Nav.Link>
                        <Nav.Link href="/members/login">로그인</Nav.Link>
                        <Nav.Link href="/login/Join">회원가입</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                </>
                :( role == 'ROLE_ADMIN' || role == 'ADMIN')
                ?<><p  className='loginInfo'>[기부자&회원] {email}</p>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/item/ItemForm">상품등록</Nav.Link>
                            <Nav.Link href="/item/ItemMng">상품관리</Nav.Link>
                            <Nav.Link href="/cart/Cart">장바구니</Nav.Link>
                            <Nav.Link href="/order/OrderHist">구매이력</Nav.Link>
                            <Nav.Link href="/offer/OfferHist">판매이력</Nav.Link>
                            <Nav.Link href="/members/logout">로그아웃</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                    </>
                    
                    :(role == 'ROLE_SELLER' || role == 'SELLER')
                        ?<><p className='loginInfo'>[기부자] {email}</p>
                        <Navbar bg="primary" variant="dark">
                            <Container>
                            <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/item/ItemForm">상품등록</Nav.Link>
                                <Nav.Link href="/item/ItemMng">상품관리</Nav.Link>
                                <Nav.Link href="/offer/OfferHist">판매이력</Nav.Link>
                                <Nav.Link href="/members/logout">로그아웃</Nav.Link>
                            </Nav>
                            </Container>
                        </Navbar>
                        </>
                        :(role == 'ROLE_BUYER' || role == 'BUYER')
                            ?<><p className='loginInfo'>[피기부 기관] {email}</p>
                            <Navbar bg="primary" variant="dark">
                            <Container>
                            <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/cart/Cart">장바구니</Nav.Link>
                                <Nav.Link href="/order/OrderHist">구매이력</Nav.Link>
                                <Nav.Link href="/members/logout">로그아웃</Nav.Link>
                            </Nav>
                            </Container>
                        </Navbar>
                        </>
                        :(role == 'ROLE_MANAGER' || role == 'MANAGER')
                        ?<><p className='loginInfo'>[관리자] {email}</p>
                        <Navbar bg="primary" variant="dark">
                            <Container>
                            <Navbar.Brand href="/">DonatorsMarket</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/members/management">회원목록</Nav.Link>
                                <Nav.Link href="/members/logout">로그아웃</Nav.Link>
                            </Nav>
                            </Container>
                        </Navbar>
                        </>
                        :<></>
            }
            
        </div>
        <Router>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/item/ItemForm' element={<ItemForm/>} />
                <Route path='/item/ItemMng' element={<ItemMng/>} />
                <Route path='/cart/Cart' element={<CartList/>} />
                <Route path='/order/OrderHist' element={<OrderHist/>} />
                <Route path='/offer/OfferHist' element={<OfferHist/>} />
                <Route path='/members/login' element={<Login/>} />
                <Route path='/login/Join' element={<Join/>} />
                <Route path='/:itemId' element={<ItemDtl/>} />
                {/* <Route path='/:itemId' element={<Comment/>} /> */}
                <Route path='/test/itemDtlTest' element={<ItemDtlTest/>} />
                <Route path='/item/update/:itemId' element={<ItemUpdate/>} />
                <Route path='/test/itemForm' element={<ItemFormTest/>} />
                <Route path='/test/checkboxTest' element={<CheckboxTest/>} />
                <Route path='/members/logout' element={<Logout/>} />
                <Route path='/members/management' element={<MemberManagement/>} />

            </Routes>
        </Router>
        </>
    );       
}
export default Header;