"use client"

import { ICartItem } from "@/types/CartItem";
import { CardContainer, ImgContainer, NomeDoProduto, NomeSpanContainer, Preco, DescricaoContainer, InfoContainer, Button } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../../providers/CartProvider";

interface ProductItemProps {
    item: ICartItem; 
  }

export default function CardProduto({ item }: ProductItemProps) {
    const {addItemToCart} = useCart()
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
            <Button onClick={() => addItemToCart(item)}>
                <FiShoppingBag />
                COMPRAR
            </Button>      
        </CardContainer>
    )
}