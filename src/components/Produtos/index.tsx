import Cards from "./cards";
import data from "../../data/data.json";

interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string
}

const Produtos = () => {
  const products: Produto[] = data;
  return (
    <section className="w-full max-w-[1200px] mx-auto py-16 font-roboto">
      <div className="w-full flex gap-2 items-baseline">
        <h1 className="text-3xl text-secondary font-semibold border-b-4 border-secondary">
          Mais Vendidos
        </h1>
        <p className="text-xl text-zinc-500 flex-1 border-b-2 py-0.5">
          Selecionamos produtos especiais para você
        </p>
      </div>
      <div className="grid grid-cols-4 pt-20 gap-4">
        {products.map((item) => {
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
