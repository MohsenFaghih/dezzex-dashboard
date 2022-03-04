import React, {useContext} from 'react';
import {Container, Row, Col, Navbar as NavBrand, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import { DataContext } from '../../contexts/DataContext';

const Navbar = ({lists}) => {

// Get user data to check if it is exists or not
    const userDetails = useContext(DataContext).userSetCookies?.loginData || ''

    return (
        <Container fluid className='p-0' style={{maxWidth: '1920px'}}>
            <Row className={styles.row}>
                <Col xs={3} sm={4} md={4} lg={1}>
                    <NavBrand.Brand href="/" className={styles.logo}>
                        <img src={`${process.env.PUBLIC_URL}Dezzex-Logo.webp`} alt='Dezzex-Logo' />
                    </NavBrand.Brand>
                </Col>
                <Col lg={8} className={`${styles.lists} d-none d-lg-block`}>
                    <Nav className={`me-auto ${styles.list}`}>
                        {/* Here we can use Route match or useHistory to make nested route */}
                        {lists.map((item, i)=>(
                            <Nav.Link key={i} href={`#${item}`}>{item}</Nav.Link>
                        ))}
                    </Nav>
                </Col>
                <Col xs={9} sm={8} md={8} lg={3} className='d-flex justify-content-end p-0'>
                    <Row className={styles.row}>
                        <Col xs={7} sm={7} md={7} lg={7} className={styles.userDetail}>
                            <span>{userDetails.username}</span>
                            <span>{userDetails.role}</span>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={5} className={styles.avatar}>
                            <div><img src={`${process.env.PUBLIC_URL}/assets/icons/user/Ellipse461.png`} alt={userDetails.username} /></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar