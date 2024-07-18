import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-40 my-auto bg-gradient-to-r from-primary via-secondary to-pink-700">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src="/logo.png" className="size-24" alt="Logo" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-200">
            <li>
              <Link to="/sobre" className="hover:underline me-4 md:me-6">
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/politica-de-privacidade"
                className="hover:underline me-4 md:me-6"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 py-3" />
        <span className="flex text-center justify-center text-sm text-gray-300 sm:text-center dark:text-gray-200">
          <a href="/" className="hover:underline">
          © 2023{" "}
            Webster Dev™
          </a>
          . Todos os direitos reservados.
          <span className="px-3">|</span>
          <span>
            Desenvolvido por{" "}
            <a className="underline underline-offset-2" href="https://websterdeveloper.pro" target="blank">
              Webster Dev
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
