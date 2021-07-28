import React from "react";
import Avatar from "../images/avatar.jpg";
import {useHistory} from "react-router-dom";

function Navigation(props) {
  const history = useHistory();
  const isInMovies = props.route === "movies";
  const isInSavedMovies = props.route === "savedMovies";
  const isInProfile = props.route === "profile";
  const isNavOpened = props.headerButtonClicked;
  const isInMain = props.route === "main";

  const navigationButtonProfile = `navigation__button ${
    isInProfile ? "navigation__button_current" : ""
  }`;

  const navigationButtonMain = `navigation__button ${
    isInMain ? "navigation__button_current" : ""
  }`;

  const navigationButtonMovies = `navigation__button ${
    isInMovies ? "navigation__button_current" : ""
  }`;

  const navigationButtonSavedMovies = `navigation__button
    ${isInSavedMovies ? "navigation__button_current" : ""}`;

  function compareTips() {
    if (props.tip === "signOut") {
      props.signOut();
    }
    if (props.tip === "register") {
      props.signUp();
    }
    if (props.tip === "login") {
      props.signIn();
    }
  }

  function closeButtonIsCliked() {
    props.isButtonClicked("false");
  }

  function redirectToMovies() {
    history.push("/movies");
  }

  function redirectToSavedMovies() {
    history.push("/saved-movies");
  }

  function redirectToProfile() {
    history.push("/profile");
  }

  function redirectToMain() {
    history.push("/");
  }

  return (
    <section className={`navigation ${isNavOpened ? "navigation_visible" : ""}`}>
      {props.headerButtonClicked ? (
        <button
          className="navigation__close-button"
          onClick={closeButtonIsCliked}
        ></button>
      ) : (
        ""
      )}
      <div className="navigation__container">
        <div className="navigation__buttoms">
          {props.headerButtonClicked ? (
            <button className="navigation__button" onClick={redirectToMain}>Главная</button>
          ) : (
            ""
          )}
          <button className={navigationButtonMovies} onClick={redirectToMovies}>Фильмы</button>
          <button className={navigationButtonSavedMovies} onClick={redirectToSavedMovies}>
            Сохраненные фильмы
          </button>
        </div>
        <div className="navigation__account">
          <button className={navigationButtonProfile} onClick={redirectToProfile}>Аккаунт</button>
          <img className="navigation__avatar" alt="Avatar" src={Avatar}></img>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
