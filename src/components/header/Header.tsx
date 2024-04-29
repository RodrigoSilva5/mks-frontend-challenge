"use client"
import CartButton from "../CartButton/CartButton";
import { HeaderContainer, Logo } from "./style";
export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <span>
                    MKS
                </span>
                <span>
                    Sistemas
                </span>
            </Logo>

            <CartButton>
                
            </CartButton>
        </HeaderContainer>
    )
}