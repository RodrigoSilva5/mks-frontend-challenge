"use client"

import { ICartItem } from "@/types/CartItem";
import { CardContainer, ImgContainer, NomeDoProduto, NomeSpanContainer, Preco, DescricaoContainer, InfoContainer, Button } from "./style";
import { FiShoppingBag } from "react-icons/fi";

interface ProductItemProps {
    item: ICartItem; 
  }

export default function CardProduto({ item }: ProductItemProps) {
    return(
        <CardContainer>
            <ImgContainer >
                <img src={item.photo} alt="" />
            </ImgContainer>
            {/*  */}
        <InfoContainer>
                <NomeSpanContainer>
                    <NomeDoProduto>
                        {item.name}  
                    </NomeDoProduto>
                    <Preco>
                        R${item.price}
                    </Preco>
                </NomeSpanContainer>
                {/*  */}
                <DescricaoContainer>
                    <p>
                        {item.description}
                    </p>
                </DescricaoContainer>
        </InfoContainer>
            <Button>
                <FiShoppingBag />
                COMPRAR
            </Button>      
        </CardContainer>
    )
}