import { useState } from "react";
import Header from "./components/layout/Header";
import ProfessionalPortfolio from "./ProfessionalPortfolio";
import GamePortfolio from "./GamePortfolio";

function App() {
  const [mode, setMode] = useState<"professional" | "game">("professional");

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Header mode={mode} setMode={setMode} />

      <main className="pt-16">
        {mode === "professional" ? (
          <ProfessionalPortfolio />
        ) : (
          <GamePortfolio />
        )}
      </main>
    </div>
  );
}

export default App;
