import type { ICharacter } from "@/shared/types/types";
import classes from "./CharacterCard.module.scss";
import { FavoriteToggleButton } from "@/features/favorites/ui/FavoriteToggleButton";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className={classes.card}>
      <Link
        to={`/characters/${character.id}`}
        className={classes.CharacterCard}
      >
        <img
          src={character.image}
          alt={character.name}
          className={classes.img}
        />
        <p className={classes.name}>{character.name}</p>
        <p className={classes.name}>{character.status}</p>
      </Link>
      <FavoriteToggleButton character={character} />
    </div>
  );
};
