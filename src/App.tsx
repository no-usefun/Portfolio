import Header from "./components/layout/Header";
import ProfessionalPortfolio from "./ProfessionalPortfolio";

function App() {
  return (
    <div className="bg-neutral-950 text-white">
      <Header />

      <main className="pt-16">
        <ProfessionalPortfolio />
      </main>
    </div>
  );
}

export default App;
