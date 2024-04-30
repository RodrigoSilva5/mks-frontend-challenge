'use client'

import styled from "styled-components"


export const ContainerCart = styled.div`
    z-index: 111;
    width: 30%;
    height: 100%;
    background-color: #0F52BA;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    box-shadow: 5px 0px 6px 0px #00000021;
    justify-content: space-between;
    svg{
        background-color: white;
        font-size: 35px;
        border-radius: 50%;
        cursor: pointer;
    }
    h1{
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color:white;
        font-size: 24px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

`
export const DisplayProducts = styled.section`
    padding: 36px;
    padding-right: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: white;
    font-size: 24px;
    overflow: scroll;
    span{
        display: flex;
        justify-content: space-around;
    }
    @media (max-width: 768px) {
        padding: 0;
    }

`
export const CartButton = styled.button`
        background-color: black;
        color: white;
        border: none;
        width: 100%;
        height: 34px;
        height: 10%;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 28px;
        cursor: pointer;
`
export const TopCart = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    padding: 36px;
`