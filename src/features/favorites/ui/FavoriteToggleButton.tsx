import { useFavorites } from "../model/useFavorites";
import type { ICharacter } from "@/shared/types/types";
import classes from "./FavoriteToggleButton.module.scss";

interface Props {
  character: ICharacter;
}

export const FavoriteToggleButton = ({ character }: Props) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleClick = () => {
    toggleFavorite(character);
  };

  const active = isFavorite(character.id);

  return (
    <button
      onClick={handleClick}
      className={
        active ? `${classes.button} ${classes.active}` : classes.button
      }
      title={active ? "Удалить из избранного" : "Добавить в избранное"}
    >
      {active ? "❤️" : "🤍"}
    </button>
  );
};
