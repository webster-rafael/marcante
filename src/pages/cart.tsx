import { IoMdTrash } from "react-icons/io";
import { useCart } from "../context/useCart";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, produto) => total + produto.price * produto.quantity, 0)
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  };

  return (
    <main className="w-full max-w-[1200px] min-h-screen mx-auto font-franklin text-zinc-50 flex flex-col gap-10">
      <section className="w-full h-full max-w-[1200px] my-10 shadow-md shadow-black/20 rounded-lg mx-auto text-black">
        <div className="w-full bg-zinc-100 max-w-[1200px] mx-auto flex flex-col border py-5">
          <div className="w-[73%] mx-auto flex justify-between items-center text-black/70">
            <h1 className="uppercase font-semibold">Produto</h1>
            <h1 className="uppercase font-semibold hidden sm:block">QTD</h1>
            <h1 className="uppercase font-semibold">Subtotal</h1>
          </div>

          {cart.length > 0 ? (
            cart.map((produto) => (
              <div
                key={produto.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-8 mt-5 border-b py-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <img
                    src={produto.img}
                    className="size-20 sm:size-28 rounded-full"
                    alt={produto.title}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm sm:text-basefont-semibold text-black/70">
                      {produto.title}
                    </h1>
                    <span className="font-bold text-lg">
                      {produto.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:w-[55%]">
                  <div className="w-auto h-20 flex items-center gap-1">
                    <button
                      onClick={() => decreaseQuantity(produto.id)}
                      className="flex size-6 justify-center items-center bg-violet-500 border-none appearance-none rounded-full text-white text-sm"
                    >
                      -
                    </button>
                    <input
                      value={produto.quantity}
                      className="w-16 pl-4 flex items-center bg-transparent border rounded focus:outline-none px-1 font-bold text-center"
                      type="number"
                      readOnly
                    />
                    <button
                      onClick={() => increaseQuantity(produto.id)}
                      className="flex size-6 justify-center items-center bg-violet-500 border-none appearance-none rounded-full text-white text-sm"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-xl">
                    {calculateSubtotal(produto.price, produto.quantity)}
                  </span>
                  <button onClick={() => removeFromCart(produto.id)}>
                    <IoMdTrash className="text-red-600 hover:scale-110 size-7" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-black/70">
              Seu carrinho está vazio.
            </div>
          )}

          <div className="w-[80%] flex mx-auto mt-10 justify-between">
            <button className="bg-violet-700 w-36 py-2 text-white rounded-lg hover:bg-violet-600 hover:scale-105">
              Finalizar Compra
            </button>
            <div className="flex items-center sm:items-baseline gap-1 sm:text-lg font-bold uppercase text-zinc-600">
              <span className="">Total:</span>
              <span className="text-xl sm:text-2xl text-black">{calculateTotal()}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
