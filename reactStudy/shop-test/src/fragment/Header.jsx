import React, { Component } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component {
    render() {
        return(
            <>
            
            <div>
                <h1>❝Donators Market❞</h1> <br/>
            </div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">DonatorsMarket</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/admin/item/new">상품등록</Nav.Link>
                    <Nav.Link href="/admin/item/new">상품관리</Nav.Link>
                    <Nav.Link href="/cart">장바구니</Nav.Link>
                    <Nav.Link href="/orders">구매이력</Nav.Link>
                    <Nav.Link href="/offers">판매이력</Nav.Link>
                    <Nav.Link href="/members/login">로그인</Nav.Link>
                    <Nav.Link href="/members/logout">로그아웃</Nav.Link>
                    {/* <Nav.Link href="/members/management">회원관리</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>
            </>
        );
    }
}


export default Header;