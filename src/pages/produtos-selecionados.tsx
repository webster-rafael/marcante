import { useParams } from "react-router-dom";
import data from "../data/data.json";

import Cards from "../components/Produtos/cards";
interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  type: string;
  slug: string;
}

export default function ProdutosSelecionados() {
  const { type } = useParams<{ type: string }>();


  if (!type) {
    return <div>Parâmetro de produto inválido</div>;
  }

  const products: Produto[] = data.filter((produto) => produto.type === type);

  return (
    <main className="w-full border border-black mx-auto font-roboto">
      <section className="w-full min-h-screen max-w-[1200px] mx-auto">
        <h1 className="text-4xl py-10 border-b uppercase font-semibold text-secondary">
          {type}
        </h1>
        <div className="w-full h-full pb-10 pt-20 grid grid-cols-4 gap-5">
          {products.map((produto) => (
            <Cards
            key={produto.id}
            id={produto.id}
            img={produto.img}
            price={produto.price}
            title={produto.title}
            slug={produto.slug}
            type={produto.type}
             />
          ))}
        </div>
      </section>
    </main>
  );
}
