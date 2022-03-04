import styled from "styled-components";

export const ProjectTableRoot = styled.div`
    margin-bottom: 20px;

    & table{
        border-collapse:separate;
        border-spacing:0 10px;
    }

    & img{
        margin: auto 10px;
    }

    & th{
        color: #ADB9D8;
        font-weight: 400
    }

    & td{
        color: white;
        @media only screen and (max-width: 1100px){
            min-width: 250px;
        }
    }

    & tbody tr{
        background-color: #35415E;
        border: 1px solid #1C2333;
        vertical-align: middle;
    }

    & div.blue, div.orange{
        border-radius: 6px;
        width: fit-content;
        padding: 10px;
        font-size: 13px;
    }

    & div.blue{
        color: #6280FF;
        background-color: hsla(229, 100%, 69%, .08);
    }
    & div.orange{
        color: #FF9C46;
        background-color: hsla(28, 100%, 64%, .08);
    }
`;