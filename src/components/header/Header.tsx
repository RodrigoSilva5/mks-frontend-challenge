import React from 'react';
import CartButton from "../CartButton/CartButton";
import { HeaderContainer, Logo } from "./style";
import { ToggleProps } from '@/types/Toogle';

export default function Header({ toggleDisplay }: ToggleProps) {
  return (
    <HeaderContainer>
      <Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </Logo>

      <CartButton toggleDisplay={toggleDisplay} />
    </HeaderContainer>
  );
}
