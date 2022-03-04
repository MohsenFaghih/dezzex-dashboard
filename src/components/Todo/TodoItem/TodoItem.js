import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { TodoItemRoot, StyledCheckbox } from './styles';
import {ReactComponent as Info} from '../../../assets/img/info.svg'

const TodoItem = ({id,  title,  urgent,  important,  completed}) => {

// Just to make changable value for toggling checkbox and title
  const [taskStatus, setTaskStatus] = useState(completed)

// Get and Set correct status for each todo
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
        <Col sm={10}>
          <Row>
            <Col sm={1} xs={2}>
              <StyledCheckbox>
                <input type="checkbox" checked={taskStatus} onChange={e=>setTaskStatus(!taskStatus)} />
                <span className="checkmark"></span>
              </StyledCheckbox>
            </Col>
            <Col sm={11} xs={10}>
              <p className={taskStatus?'complete':'notComplete'}>{title}</p>
              <span className={status.class}>{status.text}</span>
            </Col>
          </Row>
        </Col>  
        <Col sm={2} className='icons'>
          <Info fill='transparent' stroke='white' />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/dots.png`} alt='more' />  
        </Col>  
    </TodoItemRoot>
  )
}

export default TodoItem