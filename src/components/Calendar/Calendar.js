import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import { CalendarRoot } from './styles'

const Calendar = () => {

    const times = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM","12:00 PM","1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM","7:00 PM" ]
    const context = useContext(DataContext)
    const fullDate = context.fullDate
    const calendarData = context.calendarData
    
    return (
        <CalendarRoot>
            <div className='calendarTitle'>
                <div className='title'>
                    <h6>Calendar</h6>
                    <h5>{fullDate}</h5>
                </div>
                <div className='calendarImg'><img src={`${process.env.PUBLIC_URL}/assets/icons/calendarIcon.png`} /></div>
            </div>
            <div className='hours'>
                {times.map(hour=>(
                    <div className='hour' key={hour}>
                        <div className='time'>
                            <span>{hour.split(' ')[0].split(':')[0]}</span>
                            <span>{hour.split(' ')[1]}</span>
                        </div>
                        <hr />
                        <div className='eventRoot'>
                            {calendarData.map(ev=>{
                                if(ev.start_time == hour){
                                    return(
                                        <div className={`event ${ev.group}`}>
                                            <div className='eventTitle'>{ev.title}</div>
                                            <div className='eventDuration'>{`${ev.start_time} ${ev.end_time}`}</div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </CalendarRoot>
    )
}

export default Calendar