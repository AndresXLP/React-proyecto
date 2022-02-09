import './allViews.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { collabRegister } from '../store/userSlicer/collabSlicer';
import { useDispatch } from 'react-redux';

export default function RegistrationCollab() {
  const dispatch = useDispatch();
  const initialValues = { name: '', lastName: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const { name, lastName, email, password } = formValues;
    const newCollab = { name, lastName, email, password };
    dispatch(collabRegister(newCollab));
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'El nombre es requerido!';
    }
    if (!values.lastName) {
      errors.lastName = 'El apellido es requerido!';
    }
    if (!values.email) {
      errors.email = 'El email es requerido!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Introduce una dirección de correo electrónico válida';
    }
    if (!values.password) {
      errors.password = 'La contraseña es requerida!';
    } else if (values.password.length < 4) {
      errors.password = 'La contrasena debe tener más de 4 caracteres';
    }
    return errors;
  };
  return (
    <main className="mt-5 container pt-5">
      <div className="row display-flex mt-3 justify-content-center">
        <div className="col-md-6 col-lg-7">
          <h2 className="text-center mb-3">Únete a la comunidad FIXHOGAR!</h2>
          <div className="text-center mb-2">
            <img
              src="../img/Collab-register.jpeg"
              style={{ width: "80%" }}
              alt="home-work"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-11 col-lg-5">
          <h2 className="mb-4 text-center">Colaborador</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                id="InputNombre"
                placeholder="Nombre"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.name}</p>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-2"
                name="lastName"
                id="InputApellido"
                placeholder="Apellido"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.lastName}</p>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                id="InputCorreo"
                placeholder="Correo electrónico"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.email}</p>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                id="InputContrasena"
                placeholder="Contraseña"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.password}</p>

            <div className="mt-2 text-center">
              <button type="submit" className="btn btn-outline-success">
                Continúa aquí
              </button>
            </div>
          </form>
          <div className="mt-2 text-center">
            <p className="text-center">
              Ya tienes una cuenta?{" "}
              <a href="/sessionlogin" class="link-success">
                {" "}
                Inicia Sesión
              </a>
            </p>
            <button type="button" className="btn btn-outline-danger mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Regístrate con Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
