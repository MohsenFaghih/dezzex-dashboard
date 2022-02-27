import React, {useContext} from 'react'
import {DataContext} from '../../contexts/DataContext'
import TodoItem from './TodoItem/TodoItem';
import {TodoAdd} from './styles';
import {Container, Row, Col, Button} from 'react-bootstrap';

const Todo = () => {

    const todoDataList = useContext(DataContext).todoDataList
    const today = useContext(DataContext).today
    const fullDate = useContext(DataContext).fullDate

    return (
        <Container className='p-0'>
            <Row>
                <Col md={12}>
                    <TodoAdd>
                        <div>
                            <p>Today To Do List</p>
                            <span>{today}</span>
                            <span>{fullDate}</span>
                        </div>
                        <div>
                            <Button>+</Button>
                            <img src={`${process.env.PUBLIC_URL}/assets/icons/dots.png`} alt='more' />
                        </div>
                    </TodoAdd>
                </Col>
                <Col md={12}>
                    {todoDataList.map(item=>(
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            title={item.title} 
                            urgent={item.urgent} 
                            important={item.important} 
                            completed={item.completed} 
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Todo