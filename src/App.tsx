import Banner from "./components/Banner";
import Destaques from "./components/Destaques";
import Produtos from "./components/Produtos";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Banner />
      <Produtos />
      <Destaques />
    </main>
  );
}

export default App;
