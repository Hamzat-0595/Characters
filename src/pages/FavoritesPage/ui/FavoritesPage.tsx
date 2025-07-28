import { useFavorites } from "@/features/favorites";
import { CharacterCard } from "@/pages/CharacterCard";
import classes from "./FavoritesPage.module.scss";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p className={classes.empty}>Избранных персонажей пока нет.</p>;
  }

  return (
    <div className={classes.favoritesPage}>
      <h1 className={classes.favorite}>Favorites</h1>
      <div className={classes.cardsGrid}>
        {favorites.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};
