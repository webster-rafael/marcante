import data from "../../data/data.json";
import { useState, useEffect } from "react";
import Cards from "./cards";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string;
}

const Produtos = () => {
  const produtos: Produto[] = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
     
      if (window.innerWidth < 768) {
        
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize(); // Define o valor inicial
    window.addEventListener("resize", handleResize); // Atualiza o valor em caso de redimensionamento

    return () => window.removeEventListener("resize", handleResize); // Limpa o listener
  }, []);


  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto py-0 sm:py-16 font-roboto px-5 sm:px-0">
      <div className="w-full flex flex-col sm:flex-row gap-2 items-baseline sm:pb-5">
        <h1 className="text-2xl sm:text-3xl text-secondary font-semibold lg:border-b-4 border-secondary w-full text-center">
          Mais Vendidos
        </h1>
        <p className="text-lg hidden sm:block sm:text-xl text-zinc-500 w-2/4 sm:border-b-2 py-0.5">
          Selecionamos produtos especiais para você
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({
            length: Math.ceil(produtos.length / itemsPerPage),
          }).map((_, pageIndex) => (
            <div
              className="w-full flex-none grid gap-4 p-2"
              style={{
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
              }}
              key={pageIndex}
            >
              {produtos
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((produto) => (
                  <div
                    className="flex items-center justify-center"
                    key={produto.id}
                  >
                    <Cards
                      id={produto.id}
                      img={produto.img}
                      title={produto.title}
                      price={produto.price}
                      slug={produto.slug}
                      type={produto.type}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        <button
          onClick={prevProduct}
          className="absolute -left-0 top-1/2 transform -translate-y-1/2 bg-white/50 text-purple-800 text-3xl font-bold size-12 rounded-full shadow flex items-center justify-center"
        >
          <RiArrowLeftSLine />
        </button>
        <button
          onClick={nextProduct}
          className="absolute -right-0 top-1/2 transform -translate-y-1/2 bg-white/50 text-purple-800 text-3xl font-bold size-12 rounded-full shadow flex items-center justify-center"
        >
          <RiArrowRightSLine />
        </button>
      </div>
    </section>
  );
};

export default Produtos;
