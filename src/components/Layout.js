import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = (props) => {
    return (
        <>
            <Navigation/>
            <Container fluid>
                <Row>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
   
    )
}

export default Layout