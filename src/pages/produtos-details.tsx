import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { CiCreditCard1 } from "react-icons/ci";
interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
}

export function ProdutosPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Parâmetro de produto inválido</div>;
  }

  const products: Produto[] = data;

  const findProductBySlug = (slug: string): Produto | undefined => {
    return products.find((p: Produto) => p.slug === slug);
  };

  const produto = findProductBySlug(slug);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <main className="w-full flex min-h-screen items-center max-w-[1200px] mx-auto">
      <div className="w-full flex justify-between bg-zinc-200 rounded-lg px-4 my-10">
        <div className="w-full h-[500px] flex items-center justify-center relative">
          <div className="border-2 border-zinc-500 rounded-lg absolute top-5 left-1">
            <img className="size-28 rounded-lg" src={produto.img} alt="" />
          </div>
          <img
            className="size-96 mix-blend-multiply"
            src={produto.img}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-start py-10 px-4">
          <h1 className="text-2xl font-bold font-inter uppercase">
            {produto.title}
          </h1>
          <p className="text-sm font-medium text-zinc-500 border-b border-zinc-300 pb-3">
            Código: {produto.id}
          </p>
          <div>
            <div className="">
              <h1 className="text-2xl font-medium text-purple-700">
                Descrição do produto
              </h1>
              <p className="text-zinc-600 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                delectus similique eveniet, cupiditate obcaecati accusamus eos
                corporis suscipit laudantium error nobis porro possimus, esse
                numquam quisquam natus maxime, praesentium magnam.
              </p>
            </div>
            <div className="text-xl text-zinc-500 py-5">
              por{" "}
              <span className="text-4xl font-inter text-secondary font-bold">
                {produto.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="flex gap-2 items-center pb-5">
              <CiCreditCard1 className="size-10 text-secondary" />
              <span className="">
                Até <span className="font-semibold text-secondary">4x</span> de{" "}
                <span className="text-secondary font-semibold">
                  R$ {(produto.price / 4).toFixed(2)}
                </span>
              </span>
            </div>
          </div>
          <button className="w-2/4 bg-secondary text-zinc-50 h-16 rounded-lg">
            Comprar Agora
          </button>
        </div>
      </div>
    </main>
  );
}
