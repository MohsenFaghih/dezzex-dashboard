import React, {useContext} from 'react';
import {Container, Row, Col, Navbar as NavBrand, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css'
import { DataContext } from '../../contexts/DataContext';

const Navbar = ({lists}) => {
    const userDetails = useContext(DataContext).userSetCookies?.loginData || ''

    return (
        <Container fluid className='p-0' style={{maxWidth: '1920px'}}>
            <Row className={styles.row}>
                <Col xs={3} md={1}>
                    <NavBrand.Brand href="#" className={styles.logo}>
                        <img src={`${process.env.PUBLIC_URL}Dezzex-Logo.webp`} alt='Dezzex-Logo' />
                    </NavBrand.Brand>
                </Col>
                <Col xs={12} md={8} className={`${styles.lists} d-none d-md-block`} >
                    <Nav className={`me-auto ${styles.list}`}>
                        {lists.map((item, i)=>(
                            <Nav.Link key={i} href={`#${item}`}>{item}</Nav.Link>
                        ))}
                    </Nav>
                </Col>
                <Col xs={9} md={3}>
                    <Row className={styles.row}>
                        <Col xs={8} md={7} className={styles.userDetail}>
                            <span>{userDetails.username}</span>
                            <span>{userDetails.role}</span>
                        </Col>
                        <Col xs={4} md={5} className={styles.avatar}>
                            <div><img src={`${process.env.PUBLIC_URL}/assets/icons/user/Ellipse461.png`} alt={userDetails.username} /></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar