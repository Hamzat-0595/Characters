import { useParams } from "react-router-dom";
import { useCharacterQuery } from "../model/useCharacterQuery";
import classes from "./CharacterDetails.module.scss";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useCharacterQuery(id);

  if (isLoading) return <p>Загрузка персонажа...</p>;
  if (isError) return <p>Ошибка при загрузке персонажа.</p>;
  if (!character) return <p>Персонаж не найден.</p>;

  return (
    <div className={classes.characterDetailsPage}>
      <h1 className={classes.infoWrapper__title}>{character.name}</h1>

      <div className={classes.imageWrapper}>
        <img
          className={classes.imageWrapper__img}
          src={character.image}
          alt={character.name}
        />
      </div>

      <div className={classes.infoWrapper}>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Статус:</span>{" "}
          {character.status}
        </p>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Вид:</span>{" "}
          {character.species}
        </p>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Пол:</span>{" "}
          {character.gender}
        </p>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Происхождение:</span>{" "}
          {character.origin.name}
        </p>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Местоположение:</span>{" "}
          {character.location.name}
        </p>
        <p className={classes.infoWrapper__text}>
          <span className={classes.infoWrapper__label}>Эпизоды:</span>{" "}
          {character.episode.length}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetails;
