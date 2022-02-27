import styled from "styled-components";

export const LoginForm = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px auto;
    min-width: 300px;
    width: 300px;
    max-width: 80vw;
    height: auto;
    font-family: sans-serif;

    & form{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-item: flex-start;
        box-shadow: 1px 1px 8px 0px grey;
        padding: 30px;
        border-radius: 10px;

        & > div{
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            & label, input{
                margin-bottom: 10px;
                font-size: 14px; 
            }
            & input{
                padding: 10px;
                border-radius: 7px;
                border: none;
                box-shadow: 0px 0px 10px 1px #8080805c;

                &::placeholder{
                    font-size: 11px;
                }
            }
        }

        & button{
            padding: 10px;
            border-radius: 7px;
            background-color: green;
            color: white;
            border: none;
            box-shadow: 0px 0px 10px 1px #8080805c;
            cursor: pointer;
        }

    }

`;

export const ErrorBlock = styled.div`
    display: ${props=>props.display} !important;
    color: red;
    font-size: 12px;
    
`;