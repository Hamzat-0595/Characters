import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../characterApi/characterApi";

import type { ICharacter } from "../../types/types";

export const useCharactersQuery = (name: string) => {
  return useQuery<ICharacter[], Error>({
    queryKey: ["characters", name],
    queryFn: () => fetchCharacters(name).then((data) => data.results),
  });
};
