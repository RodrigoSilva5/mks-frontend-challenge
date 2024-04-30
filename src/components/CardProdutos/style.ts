"use client"

import styled from "styled-components"
import { motion } from "framer-motion"


export const CardContainer = styled(motion.div)`    
    width: 218px;
    height: 285px;
    /* background-color: red; */
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
`
export const InfoContainer = styled.div`
    margin-left: 14px;
    margin-right: 11px;
`
export const ImgContainer = styled.div`
    width: 100%;
    height: 175px;
    display: flex;
    justify-content: center;
`
export const NomeDoProduto = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    color: #2C2C2C;
    min-width: 126px;
`
export const NomeSpanContainer = styled.div`display: flex;   `

export const Preco = styled.span`
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 10px;
    color: white;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DescricaoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    p{
        font-family: "Montserrat", sans-serif;
        font-size: 10px;
        font-weight: 300;
        color: #2C2C2C;
        word-wrap: break-word; /* Para navegadores mais antigos */
        overflow-wrap: break-word; /* Para navegadores modernos */
    }
`

export const Button = styled.button`    
    background-color: #0F52BA;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: white;
    width: 100%;
    border-radius: 0 0 8px 8px;
    border: none;
    line-height: 19px;
    /* height: 32px; */
    padding: 8px; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & > svg{
        margin-right: 14px;
    }
`