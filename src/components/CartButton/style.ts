import styled from "styled-components";

export const ButtonContainer = styled.span`
    background-color: white;
    width: 90px;
    height: 45px;
    border-radius:8px;
    display: flex;
    gap: 0.5em;
    justify-content: space-around;
    align-items: center;
    margin-right: 88px;
    cursor: pointer;
    span:nth-child(odd){
        font-size: 30px;
    }
    span:nth-child(even){
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 19px;
    }
`