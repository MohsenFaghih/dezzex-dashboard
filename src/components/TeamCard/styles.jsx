import styled from "styled-components";

export const TeamCardRoot = styled.div`

`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10%;
    border-radius: 30px;
    height: 100%;
    background-image: url(${props=> props.background});
    background-color: ${props=> props.color};

    @media only screen and (max-width: 1100px){
        margin: 30px 0;
    }

    & div, span, p{
        color: ${props=> props.textColor};
        font-size: 14px;
    }

    & p{margin: 0}

    & div.teamMembers, div.completion{
        margin: 5px 0;
        display: flex;
    }

    & div.completion{
        justify-content: space-between;
    }
    
`;

export const StyledMemberImage = styled.div`
    background-color: ${props=>props.backgroundImage?'':'white'};
    background-image: url(${props=>props.backgroundImage}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 2px solid white;
    border-radius: 50%;
    width: 38px;
    height: 36px;
    text-align: center;
    color: ${props=>props.textColor};
    padding-top: 4px;
    font-size: 13px;

    &:not(:first-child){
        margin-left: -10px;
    }

`;