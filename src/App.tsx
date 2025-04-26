import "./index.css";
import { APITester } from "./APITester";

import logo from "./docker.svg";
import { PageViews } from "./PageViews";

export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
      </div>

      <h1 className="text-5xl font-bold my-4 leading-tight">Bun + Docker</h1>
      <p>Bun app hosted in a Docker container.</p>
      <APITester />
      <PageViews />
    </div>
  );
}

export default App;
