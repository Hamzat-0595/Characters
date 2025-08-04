import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";

// Можно вынести в shared/api/character.

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
}

export const useCharacterQuery = (id: string | undefined) => {
  return useQuery<Character, Error>({
    queryKey: ["character", id], // Можно выносить ключи в отдельные переменные.
    queryFn: async () => {
      const { data } = await api.get(`character/${id}`); // Путь до API тоже в отдельные переменные.
      return data;
    },
    enabled: !!id,
  });
};
