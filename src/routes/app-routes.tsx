import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import CharacterDetail from "../pages/character-detail/character-detail";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/character-detail" element={<CharacterDetail />} />

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
export default AppRoutes;