import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #0F52BA;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.h1`
    color: #FFFFFF;
    margin: 29px 8px 29px 65px;
    span:nth-child(odd){
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size:40px;
        line-height: 19px;
    }
    span:nth-child(even){
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size:20px;
        line-height: 19px;
    }
`