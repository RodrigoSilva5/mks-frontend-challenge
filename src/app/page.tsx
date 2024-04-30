"use client"
import Footer from "@/components/Footer/Footer";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Header from "@/components/header/Header";
import { ContainerPage } from "./style";
import Carrinho from "@/components/Carrinho/Carrinho";
import { useState } from "react";


export default function Page() {
  const [display, setDisplay] = useState<boolean>(false); 

  const toggleDisplay = () => {
    setDisplay(!display); // Alternar entre exibição e ocultação do componente
  };

  return (
    <ContainerPage>
      <Header toggleDisplay={toggleDisplay} />   
      <ProductGrid />
      <Footer />
      {display ? <Carrinho toggleDisplay={toggleDisplay} /> : null}

    </ContainerPage>
  )
}