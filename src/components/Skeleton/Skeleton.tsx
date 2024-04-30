"use client"

import { motion } from "framer-motion"
import { Container, IMG } from "./style"

export default function SkeletonCard() {
    return (
        <Container 
            animate={{
                backgroundColor: [
                    "#9c9595","#bdbdbd","#eaeaea",
                ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
        >
            <IMG
                animate={{
                    backgroundColor: [
                        "#f5f5f5","#f8f8f8","#e0e0e0","#9c9595","#bdbdbd","#eaeaea",
                        "#f5f5f5","#f8f8f8","#e0e0e0","#9c9595","#bdbdbd","#eaeaea"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
            </IMG>
        </Container>
    )
}
