'use client'

import { ToggleProps } from "@/types/Toogle";
import { useCart } from "../../../providers/CartProvider";
import { CardCheckout } from "../CardCheckout/CardCheckout";
import { CartButton, ContainerCart, DisplayProducts, TopCart } from "./style"
import { IoIosCloseCircle } from "react-icons/io";

export default function Carrinho({toggleDisplay}: ToggleProps) {
    const {cartItems, calculateTotalPrice} = useCart()
    return(
        <ContainerCart>
            <TopCart>
                <h1>Carrinho de Compra</h1>
                <IoIosCloseCircle onClick={() => toggleDisplay()}/>
            </TopCart>
            <DisplayProducts>
                {cartItems.map((p) => <CardCheckout key={p.id} item={p}/>)}
                    <span>
                        <span>Total: </span>
                        <span> R$ {calculateTotalPrice()} </span>
                    </span>
            </DisplayProducts>
            
            <CartButton onClick={() => alert("compra finalizada, me contratem 😊")}>
                Finalizar Compra
            </CartButton>

        </ContainerCart>
    )
}