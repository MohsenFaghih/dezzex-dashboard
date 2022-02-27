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
                    <Col md={8} sm={12} xs={12} className='mt-5'>
                        <Row>
                            <Col md={12} sm={12} lg={6}>{props.children.Todo}</Col>
                            <Col md={12} sm={12} lg={6}>{props.children.TeamCard}</Col>
                        </Row>
                        <Row>
                        <Col md={12} xs={12}>{props.children.ProjectTable}</Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col md={4} xs={12}>{props.children.BarChart}</Col>
                            <Col md={4} xs={12}>{props.children.LineChart}</Col>
                            <Col md={4} xs={12}>{props.children.PieChart}</Col>
                        </Row>
                    </Col>
                    <Col md={4} sm={12} lg={3} className='mt-4'>
                        {props.children.Calendar}
                    </Col>
                </Row>
            </Container>
        </DashboardRoot>
    )
}

export default DashboardLayout