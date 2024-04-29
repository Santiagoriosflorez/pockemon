import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import PokemonDetail from "./components/Pokedex/PokemonDetail";
import Login from "./components/pages/Login";
import { AuthProvider, useAuth } from "./Backend/AuthProvider";

function ProtectedRoute({ element }) {
  const { user } = useAuth(); // Obtiene el estado de autenticación del contexto

  return user ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/pokemon/:id"
            element={<ProtectedRoute element={<PokemonDetail />} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
