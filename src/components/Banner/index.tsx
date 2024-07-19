const Banner = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto pb-10 lg:py-16">
      <div className="bg-banner bg-center h-96 w-full sm:rounded-lg relative shadow-xl">
        <div className="flex flex-col w-96 absolute left-1/3 sm:left-1/4 -translate-x-1/4 top-1/4">
          <h1 className="text-7xl text-zinc-50 font-sans font-medium leading-10">
            <span className="text-2xl text-pink-300 font-thin">
              A melhor loja de produtos <br />
            </span>
            Exclusivos
          </h1>
          <img className="w-40 absolute -top-24 -left-5" src="/logo.png" alt="" />
        </div>
        <button className="absolute bottom-1/4 left-1/2 sm:left-1/4 -translate-x-1/2 sm:-translate-x-1/4 text-zinc-50 border w-44 h-10 rounded-lg bg-primary hover:bg-secondary">
            Ver catálogo
        </button>
      </div>
    </section>
  );
};

export default Banner;
