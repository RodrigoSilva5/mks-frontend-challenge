"use client"

import { useQuery } from "@tanstack/react-query"
import { Container } from "./style"
import axios from "axios"
import { ICartItem } from "@/types/CartItem";
import CardProduto from "../CardProdutos/CardProduto";
import SkeletonCard from "../Skeleton/Skeleton";

export default function ProductGrid() {

    const {data, isLoading, isError, isSuccess} = useQuery({ 
        queryKey: ['products'], 
        queryFn: () => axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC"),
        select(data) {
            return data.data.products
        },
     })

    if(isLoading){
        <Container>
                            {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
                ))}
        </Container>
    }
    if(isError){
        console.error("erro na requisição ")
    }
    if(isSuccess){
        return(
            <Container>
                {data?.map((p: ICartItem) => <CardProduto key={p.id} item={p} />)}
            </Container>
        )
    }

}
