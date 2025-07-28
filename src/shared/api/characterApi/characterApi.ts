import type { ICharactersResponse } from "../../types/types";
import { api } from "../api";

export const fetchCharacters = async (
  name: string = ""
): Promise<ICharactersResponse> => {
  const response = await api.get(`/character`, {
    params: name ? { name } : {},
  });
  return response.data;
};
