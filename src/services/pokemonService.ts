import { Pokemons_Api, Pokemon } from "@/types/types";
import { api } from "@/utils/utils";

export const getAllPokemon = async (): Promise<Pokemons_Api> => {
  const data = await fetch(`${api}pokemon`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((rest) => rest);

  const response = await data.json();
  return response;
};

export const getSpecificPokemon = async (id: number): Promise<Pokemon> => {
  const data = await fetch(`${api}pokemon/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((rest) => rest);
  const response = await data.json();
  return response;
};
