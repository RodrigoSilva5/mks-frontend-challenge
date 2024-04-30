import CardProduto from "@/components/CardProdutos/CardProduto";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import SkeletonCard from "@/components/Skeleton/Skeleton";
import Header from "@/components/header/Header";
const exampleItem = {
  id: 1,
  name: 'Headset Cloud Stinger',
  brand: 'HyperX',
  description: 'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
  price: '600.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
};

export default function Page() {
  return (
    <>
      <Header />   
      <ProductGrid />
        
    </>

  )
}