import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TodoItemRoot, StyledCheckbox } from './styles';
import {ReactComponent as Info} from '../../../assets/img/info.svg'

const TodoItem = ({id,  title,  urgent,  important,  completed}) => {

  const status = 
    (urgent && important)?
    {class: 'red', text: 'Urgent And Important'}:
    (!urgent && !important)?
    {class: 'green', text: 'Not Urgent Or Important'}:
    (urgent && !important)?
    {class: 'yellow', text: 'Urgent Not Important'}:
    {class: 'blue', text: 'Important Not Urgent'}

  return (
    <TodoItemRoot>
        <Col md={10} sm={6}>
          <Row>
            <Col md={1} xs={2}>
              <StyledCheckbox>
                <input type="checkbox" checked={completed} />
                <span class="checkmark"></span>
              </StyledCheckbox>
            </Col>
            <Col md={11} xs={10}>
              <p className={completed?'complete':'notComplete'}>{title}</p>
              <span className={status.class}>{status.text}</span>
            </Col>
          </Row>
        </Col>  
        <Col md={2} sm={6} className='icons'>
          <Info fill='transparent' stroke='white' />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/dots.png`} alt='more' />  
        </Col>  
    </TodoItemRoot>
  )
}

export default TodoItem