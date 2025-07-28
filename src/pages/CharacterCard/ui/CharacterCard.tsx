import type { ICharacter } from "@/shared/types/types";
import classes from "./CharacterCard.module.scss";
import { FavoriteToggleButton } from "@/features/favorites/ui/FavoriteToggleButton";

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className={classes.card}>
      <img src={character.image} alt={character.name} className={classes.img} />
      <p className={classes.name}>{character.name}</p>
      <p className={classes.name}>{character.status}</p>
      <FavoriteToggleButton character={character} />
    </div>
  );
};
