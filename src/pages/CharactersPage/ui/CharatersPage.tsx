import { useState } from "react";
import { CharacterCard } from "@/pages/CharacterCard";
import { useCharactersQuery } from "@/shared/api/useCharactersQuery/useCharactersQuery";
import classes from "./CharactersPage.module.scss";
import { useDebouncer } from "@/shared/hooks/useDebouncer";

const CharactersPage = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useDebouncer(inputValue);

  const {
    data: characters,
    isLoading,
    isError,
  } = useCharactersQuery(debouncedSearch);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.CharacterPage}>
      <header className={classes.CharacterPage__header}>Characters</header>
      <div className={classes.CharacterPage__wrapper}>
        <input
          className={classes.CharacterPage__input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Поиск персонажа"
        />
      </div>

      {isLoading && <p>Загрузка...</p>}

      {isError && (
        <p>Ошибка загрузки. Проверьте подключение или попробуйте позже.</p>
      )}

      {!isLoading && !isError && characters?.length === 0 && (
        <p>Ничего не найдено по вашему запросу.</p>
      )}

      {characters && characters.length > 0 && (
        <div className={classes.CharacterPage__card}>
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharactersPage;
