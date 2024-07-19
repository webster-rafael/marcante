import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Cards from "../components/Produtos/cards";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [busca, setBusca] = useState("");
  const produtos = products.filter(
    (produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase()) ||
      produto.type.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="w-full mx-auto font-roboto">
      <section className="w-full min-h-screen max-w-[1200px] mx-auto">
        <div className="flex items-center flex-1 bg-gradient-to-r from-primary via-secondary to-pink-600 pl-3 mb-2 -mt-1 lg:mt-0 sm:mb-0 ">
          <span>
            <GoSearch className="text-zinc-50" />
          </span>
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="text-zinc-50 p-2 w-full focus:outline-none bg-transparent placeholder:text-zinc-50"
            placeholder="Buscar produtos"
            type="text"
          />
        </div>
        <h1 className="text-xl lg:text-4xl py-10 border-b uppercase font-semibold text-secondary px-3 lg:px-0">
          {type}
        </h1>
        <div className="w-full h-full pb-10 pt-20 grid grid-cols-2 sm:grid-cols-4 gap-5 px-3 lg:px-0">
          {produtos.map((produto) => (
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
