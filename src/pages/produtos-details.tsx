import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { CiCreditCard1 } from "react-icons/ci";
import { useCart } from "../context/useCart";
import { IoStarSharp } from "react-icons/io5";
interface Produto {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string;
}

export function ProdutosPage() {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();

  if (!slug) {
    return <div>Parâmetro de produto inválido</div>;
  }

  const products: Produto[] = data;

  const handleAddToCart = ({ id, title, img, price, slug, type }: Produto) => {
    const product: Produto = { id, title, img, price, slug, type };
    addToCart(product); // Adiciona o produto ao carrinho
  };

  const findProductBySlug = (slug: string): Produto | undefined => {
    return products.find((p: Produto) => p.slug === slug);
  };

  const produto = findProductBySlug(slug);

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <main className="w-full flex min-h-screen items-center max-w-[1200px] mx-auto">
      <div className="w-full flex justify-between flex-col sm:flex-row bg-zinc-200 h-full lg:h-[600px] rounded-lg px-4  sm:my-10">
        <h1 className="text-2xl lg:hidden text-zinc-600 font-bold font-inter uppercase text-center py-8">
          {produto.title}
        </h1>
        <div className="w-full h-[520px] flex justify-center items-center relative">
          <img
            className="size-96 mix-blend-multiply"
            src={produto.img}
            alt=""
          />

          <div className="grid grid-cols-3 absolute -bottom-16">
            <img
              className="w-full h-36 mix-blend-multiply"
              src={produto.img}
              alt=""
            />
            <img
              className="w-full h-36 mix-blend-multiply"
              src={produto.img}
              alt=""
            />
            <img
              className="w-full h-36 mix-blend-multiply"
              src={produto.img}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start py-10 px-4">
          <h1 className="text-2xl hidden lg:block text-zinc-500 font-bold font-inter uppercase text-center pt-8">
            {produto.title}
          </h1>
          <span className="flex gap-3 items-center justify-center w-full py-4 pt-10 h-20">
            <p className="text-lg text-zinc-500">Avaliação:</p>
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
            <IoStarSharp className="text-yellow-500 size-8" />
          </span>
          <div className="border-t border-zinc-300 py-3">
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
          <button
            onClick={() => handleAddToCart(produto)}
            className="lg:w-2/4 bg-secondary text-zinc-50 h-16 rounded-lg "
          >
            Comprar Agora
          </button>
        </div>
      </div>
    </main>
  );
}
