"use client"

import { IoIosCloseCircle } from "react-icons/io"
import { ContainerCart, Img, Nome, Price, Quantidade } from "./style"
import { ICartItem } from "@/types/CartItem";
import { useState } from "react";
import { useCart } from "../../../providers/CartProvider";

interface ProductItemProps {
    item: ICartItem; 
  }


export function CardCheckout({ item }: ProductItemProps) {
    const {removeItemFromCart, cartItems,increaseItemQuantity,decreaseItemQuantity} = useCart()


    const getItemQuantity = (itemId: number): number => cartItems.find((cartItem) => cartItem.id === itemId)?.quantity || 0;
    console.log(item.id, 'item removido')
  
    return(
        <ContainerCart>
            {/* img */}
            <Img src={item.photo} alt="product photo" />
            <Nome>
                {item.name}
            </Nome>
            {/* quantidade */}
            <Quantidade>
                Qtd:
                <div>
                    <button onClick={() => decreaseItemQuantity(item.id)}>-</button>
                        <span>{getItemQuantity(item.id)}</span>
                    <button onClick={() => increaseItemQuantity(item.id)}>+</button>
                </div>
            </Quantidade>
            <Price>
               R${item.price}
            </Price>
            <IoIosCloseCircle onClick={() => removeItemFromCart(item.id)}/>            
        </ContainerCart>
    )
}