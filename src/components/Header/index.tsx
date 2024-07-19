import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/useCart";
const Header = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const { cart } = useCart();

  const handleNavigation = () => {
    navigate("/carrinho");
  };

  function handleOpenMenu() {
    setMenuVisible(true);
  }

  function handleCloseMenu() {
    setMenuVisible(false);
  }

  function handleLinkClick() {
    setMenuVisible(false); // Fecha o menu ao clicar em um link
  }

  return (
    <div className="w-full bg-gradient-to-r from-primary via-secondary to-pink-600">
      <header className="w-full max-w-[1200px] flex justify-between items-center h-20 font-roboto font-medium px-4 mx-auto">
        <div className="flex items-center gap-2">
          {menuVisible ? (
            <IoMdClose
              onClick={handleCloseMenu}
              className="size-8 text-zinc-50 sm:hidden"
            />
          ) : (
            <HiOutlineMenu
              onClick={handleOpenMenu}
              className="size-8 text-zinc-50 sm:hidden"
            />
          )}
        </div>
          <img className="size-24 sm:w-32 sm:h-32" src="/logo.png" alt="Logo" />
        <nav className="hidden gap-3 text-zinc-50 text-lg items-center sm:flex">
          <Link
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            to="/lubrificantes"
          >
            Lubrificantes
          </Link>
          <Link
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            to="vibrador"
          >
            Vibradores
          </Link>
          <Link
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            to="/lingerie"
          >
            Lingerie
          </Link>
          <a
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            href="/#ofertas"
          >
            Ofertas
          </a>
          <Link
            className="hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
            to="/sobre"
          >
            Sobre
          </Link>
        </nav>

        {menuVisible ? (
          <div className="sm:hidden absolute w-2/4 top-24 left-2 bg-gradient-to-b from-neutral-800 via-primary to-neutral-900 z-10 text-white flex justify-center rounded-md">
            <nav className="flex flex-col gap-3 text-zinc-300 text-lg py-5">
              <Link
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400 text-zinc-50"
                to="/"
              >
                <RiHome3Fill className="size-8 text-purple-700" />
                Home
              </Link>
              <Link
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
                to="/lubrificantes"
              >
                <AiOutlineProduct className="size-8 text-zinc-400" />
                Lubrificantes
              </Link>
              <Link
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
                to="/vibrador"
              >
                <AiOutlineProduct className="size-8 text-zinc-400" />
                Vibradores
              </Link>
              <Link
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400 border-b border-zinc-600 pb-3"
                to="/lingerie"
              >
                <AiOutlineProduct className="size-8 text-zinc-400" />
                Lingerie
              </Link>
              <a
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
                href="/#ofertas"
              >
                <BiSolidShoppingBags className="size-8 text-zinc-50" />
                Ofertas
              </a>
              <Link
                onClick={handleLinkClick}
                className="flex items-center gap-2 hover:scale-105 hover:underline underline-offset-4 decoration-pink-400"
                to="/sobre"
              >
                <MdOutlineRoundaboutLeft className="size-8 text-zinc-50" />
                Sobre
              </Link>
            </nav>
          </div>
        ) : (
          ""
        )}

        <div className="flex items-center gap-4">
          <span className="items-center gap-2 hover:scale-105 hidden sm:flex">
            <GrContact className="size-8 text-zinc-50" />
            <span className="text-zinc-200 text-sm leading-3">
              Central de <br />{" "}
              <span className="text-base text-zinc-50">Atendimento</span>
            </span>
          </span>
          <span
            onClick={handleNavigation}
            className="flex items-center gap-2 hover:scale-105"
          >
            <div className="relative">
              <span className="absolute -top-1 -right-2 bg-zinc-50 size-4 rounded-full flex items-center justify-center p-2.5 text-sm font-bold text-purple-700">
                {cart.length}
              </span>
              <IoCartOutline className=" size-8 sm:size-11 text-zinc-50" />
            </div>
            <span className="text-zinc-200 text-sm  leading-3 hidden sm:block">
              Meu <br />{" "}
              <span className="text-base text-zinc-50">Carrinho</span>
            </span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
