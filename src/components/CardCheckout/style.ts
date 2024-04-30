"use client"

import styled from "styled-components"

export const ContainerCart = styled.div`
    width: 350px;
    height: 95px;
    background-color: white;
    border-radius: 8px 8px 8px 8px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        color: black;
        font-size: 20px;
        cursor: pointer;
        align-self: flex-start;
    }
`
export const Img = styled.img`
    max-width: 70px; 
    max-height: 70px; 
    width: auto;
    height: auto;
`
export const Nome = styled.h2`
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 13px;
        color:#2C2C2C;
        min-width: 137px;
        /*  */
        word-wrap: break-word;
        overflow-wrap: break-word;
`
export const Quantidade = styled.div`
    color: black;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 13px;
    margin: 8px;
    div {
        display: flex;
        width: 50px;
        border: 1px solid #BFBFBF;
        border-radius: 4px;
        justify-content: space-between;
        align-items: center;
        margin-top: 3px;
        
        button{
            background-color: white;
            border: none;
        }
    }
`
export const Price = styled.h2`

    color: black;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 10px;
    margin: 3px;
`
