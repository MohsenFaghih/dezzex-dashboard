import styled from "styled-components";

export const TodoAdd = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: PT Sans;
    margin-bottom: 10px;

    & div p{
        color: white;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    & div span{
        color: #ADB9D8;
        font-family: 'Inter';
        font-size: 13px;
        display: block;
    }

    & button{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-image: linear-gradient(to bottom, #001fff5c, #0443cf);
    }
    & img{
        margin-left: 15px;
        cursor: pointer;
    }
    

`;
