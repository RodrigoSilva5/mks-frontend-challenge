"use client"
import { useCart } from "../../../providers/CartProvider";
import { ButtonContainer } from "./style";
import { IoCartSharp } from "react-icons/io5";

export default function CartButton() {

    const { getNumItemsInCart } = useCart();

    return(
        <ButtonContainer onClick={() => {}} >
            <span>
                <IoCartSharp />
            </span>
            <span>
                {getNumItemsInCart()}
            </span>
        </ButtonContainer>
    )
}