import styled from "styled-components";

export const CalendarRoot = styled.div`
    height: 100%;

    & div.calendarTitle{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        overflow: hidden;

        & div.calendarImg{margin-right: -30px;}

        & h6{
            color: #ADB9D8;
            font-size: 16px;
            margin-bottom: 2px;
        }
        & h5{
            color: white;
            font-size: 21px;
        }
    }

    & div.hours{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 85%;

        & div.hour{
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            min-height: 60px;
        }

        & hr, span{
            color:#ADB9D8;
        }

        & hr{
            width: 90%;
        }
    
        & div.time{
            width: 10%;
            display: flex;
            flex-direction: column;
            align-items: center;

            & span:first-child{
                font-size: 14px;
            }
            & span:last-child{
                font-size: 9px;
            }
        }
    }

    & div.eventRoot{
        width: 90%;
        position: absolute;
        right: 0;
    }

    & div.event{
        width: 100%;
        border-radius: 2px;

        & div.eventTitle, div.eventDuration{
            padding: 10px;
        }

        & div.eventTitle{
            font-size: 13px;
        }
        & div.eventDuration{
            font-size: 12px;
        }
    }

    & div.one{
        color: #6B43EB;
        background-color: #F0F0FF;
    }
    & div.two{
        color: #FF3C9E;
        background-color: #FCEDF4;
    }
    & div.three{
        color: #569F87;
        background-color: #D3FFF1;
    }

`;