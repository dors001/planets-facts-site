import data from "../data.json";

export interface Planet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

const usePlanets = (planetName: string): Planet | undefined => {
  const planet = data.find((p) =>
    p.name === planetName ? planetName : "Mercury"
  );
  return planet;
};

export default usePlanets;
