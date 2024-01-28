import { ProductType } from "@/interfaces";
import Product from "./components/product";
import Hero from "./components/hero";
import Cta from "./components/cta";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products: ProductType[] = await res.json()
  console.log(products);
  
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-center text-5xl font-bold">New Products Shop</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Product key={product.id}  product={product}/>
          ))}
        </div>
      </section>
      <Cta />
    </main>
  )
}
