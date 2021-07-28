import FormErrors from "./FormErrors.js";
import LogRegForm from "./LogRegForm.js";
import React from "react";
import { useHistory, Redirect } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(
      {
        ...data,
        [name]: value,
      },
      props.validateField(name, value)
    );
  }

  props.setRoute("login");

  function handleSubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    props.setEmail(data.email);
    props.authorize(data.email, data.password);
    setData({ email: "", password: "" });
  }

  function signUp() {
    history.push("/sign-in");
  }
  function signIn() {
    history.push("/sign-up");
  }

  return (
    <>
      <LogRegForm
        title="Вход"
        buttonText="Войти"
        submit={handleSubmit}
        route={props.route}
        formValid={props.validity.formValidLog}
      >
        <p className="logreg__form-name">E-mail</p>
        <input
          onChange={handleChange}
          value={data.email}
          className="logreg__input"
          type="email"
          name="email"
          id="logreg__input_email"
          required
        />
        <FormErrors formErrors={props.validity.formErrors.email} input="name" />
        <p className="logreg__form-name">Пароль</p>
        <input
          onChange={handleChange}
          value={data.password}
          className="logreg__input"
          type="password"
          name="password"
          id="logreg__input_password"
          required
        />
        <FormErrors
          formErrors={props.validity.formErrors.password}
          input="name"
        />
      </LogRegForm>
    </>
  );
}

export default Login;
