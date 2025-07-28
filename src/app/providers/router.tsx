import { CharactersPage } from "@/pages/CharactersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        {/* <Route path="/characters/:id" element={<CharacterDetailsPage />} /> */}
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
