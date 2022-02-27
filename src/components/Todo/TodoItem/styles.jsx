import styled from 'styled-components'

export const TodoItemRoot = styled.div`
    display: flex;
    width: 100%;
    min-height: 70px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    transition: all .3s;

    &:hover{
        background: hsla(0, 0%, 100%, .05) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px hsl(0deg 0% 0% / 5%);
    }

    & p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        margin: 0;

        @media screen and (max-width: 1100px){
            white-space: normal;
        }
    }

    & p.notComplete{
        color: white;
    }

    & p.complete{
        color: white;
        opacity: 0.4;
        text-decoration: line-through;
    }

    & span.red{color: rgba(255, 29, 56, 1)}
    & span.green{color: #00E965}
    & span.yellow{color: rgba(255, 230, 0, 1); opacity: 0.4}
    & span.blue{color: rgba(0, 239, 255, 1); opacity: 0.4}

    & svg{
        cursor: pointer
    }

    & div.icons{
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & img{
            margin-left: 15px;
        }
    }

`;

export const StyledCheckbox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    & span.checkmark{
        position: absolute;
        top: 10px;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #ffffff10;
        border-radius: 50%;
    }
      
    & span.checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
      
    & input:checked ~ .checkmark:after {
        display: block;
    }
      
    & span.checkmark:after {
        left: 9px;
        top: 5px;
        width: 7px;
        height: 12px;
        border: solid #00E965;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

`;