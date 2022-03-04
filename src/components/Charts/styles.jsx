import styled from "styled-components";

export const ChartRoot = styled.div`
    background-color: #35415E;
    border-radius: 6px;
    min-height: 280px;
    display: flex;
    align-items: flex-end;
    align-content: space-between;
    flex-wrap: wrap;

    @media only screen and (max-width: 1400px){
        min-height: 240px
    }

    @media only screen and (max-width: 1100px){
        height: auto;
        max-height: 900px;
    }

`;

export const ChartTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;
    width: 100%;

    & p{
        font-size: 9px;
        color: #ADB9D8;
        margin-bottom: 5px;
    }

    & h4{
        display: flex;
        align-items: center;
        color: white;
        font-weight: bold;

        &:after{
            content: '';
            width: 12px;
            height: 12px;
            display: block;
            background-image: url(${props=>props.arrow?props.arrow:''});
            background-repeat: no-repeat;
            margin-left: 10px
        }
    }

    & .btn-check:active+.btn-primary{
        background-color: white;
        color: #9494F4;
    }

    & .btn-primary{
        background-color: white;
        color: #9494F4;
        font-size: 12px;
        min-width: 70px;
    }

    & .btn-check:checked+.btn-primary{
        background-color: #9494F4;
        border-color: #9494F4;
        color: white;

        &:focus{
            box-shadow: none;
        }
    }

    & .btn-check:focus+.btn, .btn-primary:active:focus {
        box-shadow: none;
        outline: none;
    }

`;