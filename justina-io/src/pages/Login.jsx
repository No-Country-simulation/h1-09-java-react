import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí es donde agregarás la lógica de autenticación
  };

  return (
    <div className="flex-auto bg-pattern">
      <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0 lg:h-screen">
        <div className="flex flex-col items-center w-full gap-10 mt-10">
          <a href="/" className="text-2xl font-semibold text-gray-900">
            <img
              className="w-64 h-auto md:w-80"
              src="/imagotype.webp"
              width="500"
              height="361"
              alt="App logo"
            />
          </a>
          <div className="w-full max-w-md bg-white border rounded-lg shadow-sm">
            <div className="space-y-5 p-7">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                Ingresá a Justina.io
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="nombre@email.com"
                      className="w-full input input-bordered"
                      {...register("email", {
                        required: "Email is required",
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Contraseña</span>
                    </label>
                    <div className="relative flex items-center gap-2 input input-bordered">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className=" grow"
                        placeholder="contraseña"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      <button
                        type="button"
                        tabIndex="-1"
                        aria-label="password-visibility-toggle"
                        className="absolute top-0 right-1 p-1 m-2.5 rounded-full border border-transparent font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all text-gray-500 hover:bg-gray-100"
                        onClick={() => togglePasswordVisibility()}
                      >
                        {passwordVisible ? (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              data-icon="mdi-eye"
                              className="w-4 h-4 iconify iconify--mdi"
                            >
                              <path
                                fill="currentColor"
                                d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                              ></path>
                            </svg>
                          </div>
                        ) : (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              data-icon="mdi-eye-off"
                              className="w-4 h-4 iconify iconify--mdi"
                            >
                              <path
                                fill="currentColor"
                                d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-5">
                  <Link
                    to="/recuperacion"
                    className="no-underline link link-secondary"
                  >
                    Olvidé mi contraseña
                  </Link>
                </div>

                {/* Mensajes de error que se mostrarían con la lógica de autenticación */}
                {/* <div className="alert alert-error">Wrong Credentials</div>
                <div className="alert alert-error">Error occurred while logging in</div>
                <div className="alert alert-info">Non-valid account</div> */}

                <div className="flex flex-col gap-3 mt-5">
                  <button type="submit" className="w-full btn btn-secondary">
                    Ingresar
                  </button>
                  <button className="w-full btn btn-default">
                    <Link to="/registrarse" className="w-full">
                      Registrarse
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

