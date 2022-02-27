import styled from "styled-components";

export const DashboardRoot = styled.div`
    width: 100%;
    height: 100%;

    & div.m-auto{
        max-width: 100%;
    }

    & div.align-items-center div{
        @media only screen and (max-width: 1100px){
            margin-bottom: 40px;
        }
    }
`;

export const TodoListRoot = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

`;