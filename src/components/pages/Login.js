import "../Css/Login.css";
import { useState } from "react";
import ImagenProfile from "../Img/pokebola.png";
import { useNavigate } from "react-router";
import { useAuth } from "../../Backend/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [registrar, setRegistrar] = useState(false);
  const [showPassword, SetShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    SetShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const auth = useAuth();
  const { login, signup } = auth;

  const Autenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    try {
      if (registrar) {
        await signup(correo, contraseña);
        navigate("/");
      } else {
        await login(correo, contraseña);
        navigate("/");
      }
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };
  return (
    <div className="body">
      <div className="row">
        <div className="col-md-2">
          <div className="padre">
            <div className=" card card-body shadow-lg">
              <img src={ImagenProfile} alt="" className="estilo-perfil" />
              <form onSubmit={Autenticacion}>
                <input
                  type="text"
                  placeholder="CorreoElectronico"
                  className="input"
                  id="email"
                  required
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="input"
                  id="password"
                  required
                />
                <button id="btn" className="btn-form">
                  {registrar ? "Registrarse" : "Iniciar sesión"}
                </button>
              </form>
              <h4 className="texto">
                {registrar ? "Si ya tiene cuenta" : "¿No tienes Cuenta?"}
                <button
                  className="btnswitch"
                  onClick={() => setRegistrar(!registrar)}
                >
                  {registrar ? "Iniciar sesión" : "Registrarse"}
                </button>
              </h4>
            </div>
            <button className="btn-Password" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
