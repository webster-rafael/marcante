import { useState } from "react";
import { GoSearch } from "react-icons/go";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  type: string;
  slug: string;
}

const Banner = () => {
  const [busca, setBusca] = useState("");
  const produtos = data.filter(
    (produto: Produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase()) ||
      produto.type.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section className="w-full max-w-[1200px] mx-auto pb-10 lg:pb-16">
      <div className="w-full h-full relative">
        <div className="flex items-center w-full py-2 bg-gradient-to-r from-primary via-secondary to-pink-600 pl-3 lg:mt-0 sm:mb-0">
          <span>
            <GoSearch className="text-zinc-100" />
          </span>
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="text-zinc-100 p-2 w-full focus:outline-none bg-transparent placeholder:text-zinc-100"
            placeholder="Buscar produtos"
            type="text"
          />
        </div>
        {busca && (
          <ul className="w-full lg:w-2/4 max-h-80 overflow-auto flex space-y-1 flex-col justify-between p-1 bg-zinc-100 absolute z-20 rounded-b-md">
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <Link key={produto.id} to={`/produtos/${produto.slug}`}>
                  <li className="w-full flex justify-between items-center pr-5 border-b p-1">
                    <img className="w-16 mix-blend-multiply" src={produto.img} alt={produto.type} />
                    <h1>{produto.title}</h1>
                    <span>{produto.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    })}</span>
                  </li>
                </Link>
              ))
            ) : (
              <li className="w-full text-center p-2 text-gray-500">
                Produto não encontrado
              </li>
            )}
          </ul>
        )}
      </div>
      <div className="bg-banner bg-center h-96 w-full relative shadow-xl">
        <div className="flex flex-col w-96 absolute left-1/3 sm:left-1/4 -translate-x-1/4 top-1/4">
          <h1 className="text-7xl text-zinc-50 font-sans font-medium leading-10">
            <span className="text-2xl text-pink-300 font-thin">
              A melhor loja de produtos <br />
            </span>
            Exclusivos
          </h1>
          <img
            className="w-40 absolute -top-24 -left-5"
            src="/logo.png"
            alt=""
          />
        </div>
        <button className="absolute bottom-1/4 left-1/2 sm:left-1/4 -translate-x-1/2 sm:-translate-x-1/4 text-zinc-50 border w-44 h-10 rounded-lg bg-primary hover:bg-secondary">
          Ver catálogo
        </button>
      </div>
    </section>
  );
};

export default Banner;
