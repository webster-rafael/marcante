import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";

interface Product {
  id: number;
  title: string;
  img: string;
  price: number;
  slug: string;
  type: string;
}

const Cards = ({ id, title, img, price, slug, type }: Product) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product: Product = { id, title, img, price, slug, type };
    addToCart(product); // Adiciona o produto ao carrinho
  };

  return (
    <div className="w-full h-[320px] py-3 sm:py-0 sm:h-[390px] flex flex-col items-center border font-roboto bg-slate-100 rounded-md shadow-md">
      <Link to={`/produtos/${slug}`}>
        <img
          className="mix-blend-multiply w-full h-52 sm:h-[250px]"
          src={img}
          alt={title}
        />
      </Link>
      <p className="text-sm sm:text-base font-medium text-zinc-600">{title}</p>
      <span className="text-xl text-secondary font-semibold">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button
        onClick={() => handleAddToCart()}
        className="w-[90%] sm:w-44 border h-10 bg-secondary text-zinc-50 rounded-lg mt-2 hover:scale-105"
      >
        Comprar
      </button>
    </div>
  );
};

export default Cards;
