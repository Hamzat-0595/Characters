import type { ICharacter } from "@/shared/types/types";
import classes from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <p className={classes.name}>{character.name}</p>
      <p className={classes.name}>{character.status}</p>
    </div>
  );
};
