import { useEffect, useState } from "react";
import type { ICharacter } from "@/shared/types/types";

const LOCAL_STORAGE_KEY = "favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const isFavorite = (id: number) => favorites.some((char) => char.id === id);

  const toggleFavorite = (character: ICharacter) => {
    const exists = isFavorite(character.id);
    const updated = exists
      ? favorites.filter((char) => char.id !== character.id)
      : [...favorites, character];

    setFavorites(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
};
