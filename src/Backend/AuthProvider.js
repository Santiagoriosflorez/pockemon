import { useState, createContext, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import appFirebase from "./Credenciales";
import { Navigate } from "react-router";

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(appFirebase);

  const login = async (correo, contraseña) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        correo,
        contraseña
      );
      setUser(userCredential.user);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Usuario o Contraseña Incorrectos");
      window.location.reload();
      Navigate("/Login");
    }
  };

  const signup = async (correo, contraseña) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        contraseña
      );
      setUser(userCredential.user);
      alert("Registro Exitoso");
    } catch (error) {
      if (contraseña.length !== 8) {
        alert("La contraseña debe tener minimo 8 caracteres.");
        Navigate("/Login");
      } else {
        Navigate("/");
      }
    }
  };

  return (
    <Authcontext.Provider value={{ user, login, signup }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);
