import Cards from "./cards";
import data from "../../data/data.json";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string;
}

const Produtos = () => {
  const products: Produto[] = data;
  const [busca, setBusca] = useState("");

  const produtos = products.filter(
    (produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase()) ||
      produto.type.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <section className="w-full max-w-[1200px] mx-auto py-0 sm:py-16 font-roboto px-5 sm:px-0">
      <div className="w-full flex flex-col sm:flex-row gap-2 items-baseline sm:pb-5">
        <h1 className="text-2xl sm:text-3xl text-secondary font-semibold border-b-4 border-secondary">
          Mais Vendidos
        </h1>
        <p className="text-lg hidden sm:block sm:text-xl text-zinc-500 w-2/4 sm:border-b-2 py-0.5">
          Selecionamos produtos especiais para você
        </p>
        <div className="flex items-center flex-1 border border-purple-900 rounded-lg pl-3 mb-2 sm:mb-0">
          <span>
            <GoSearch />
          </span>
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="p-2 w-full rounded-r-lg focus:outline-none"
            placeholder="Buscar produtos"
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 h-[800px] overflow-auto sm:pr-3 sm:grid-cols-4 pt-20 gap-4">
        {produtos.map((item) => {
          return (
            <Cards
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              slug={item.slug}
              id={item.id}
              type={item.type}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Produtos;
