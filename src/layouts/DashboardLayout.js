import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {DashboardRoot} from './styles/Dashboard'

const DashboardLayout = (props) => {
    return (
        <DashboardRoot>
            <Container fluid className='p-0' style={{maxWidth: '1920px'}}>
                <Row className='m-auto'>
                    <Col lg={1} className='d-sm-none d-xs-none d-md-none d-lg-block p-0' >
                        {props.children.SideMenu}
                    </Col>
                    <Col lg={8} md={8} sm={12} className='mt-5'>
                        <Row>
                            <Col lg={6} md={12} sm={12}>{props.children.Todo}</Col>
                            <Col lg={6} md={12} sm={12}>{props.children.TeamCard}</Col>
                        </Row>
                        <Row>
                        <Col md={12} sm={12}>{props.children.ProjectTable}</Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col lg={5} md={12}>{props.children.BarChart}</Col>
                            <Col lg={4} md={12}>{props.children.LineChart}</Col>
                            <Col lg={3} md={12}>{props.children.PieChart}</Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={4} sm={12} className='mt-4'>
                        {props.children.Calendar}
                    </Col>
                </Row>
            </Container>
        </DashboardRoot>
    )
}

export default DashboardLayout