"use client"
import { ToggleProps } from "@/types/Toogle";
import { useCart } from "../../../providers/CartProvider";
import { ButtonContainer } from "./style";
import { IoCartSharp } from "react-icons/io5";

export default function CartButton({toggleDisplay}:ToggleProps) {

    const { getNumItemsInCart } = useCart();

    return(
        <ButtonContainer onClick={() => toggleDisplay()} >
            <span>
                <IoCartSharp />
            </span>
            <span>
                {getNumItemsInCart()}
            </span>
        </ButtonContainer>
    )
}