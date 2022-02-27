import styled from "styled-components";

export const StyledSideMenu = styled.div`
    display: flex;
    position: sticky;
    left: 0;
    top: 0;
    width: 80px;
    height: 100vh;
    background-color: #35415E;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px){
        display: none;
    }

    & .nav{
        justify-content: center;

        & a{
            padding: 10px;
            margin: 10px auto;
            border-radius: 50%;
            transition: all .3s;

            &:hover{
                background: #EC4E6E;
                & path{
                    fill: white;
                    opacity: 1;
                }
            }

            &:focus{
                background: #EC4E6E;
                & path{
                    fill: white;
                    opacity: 1;
                }
            }

            & path{
                fill: #EC4E6E;
                opacity: 0.5
            }
        }
    }

    

`;