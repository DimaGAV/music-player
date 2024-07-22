import Image from "next/image";

<div className="wrapper">
  <div className="container-enter">
    <div className="modal__block">
      <form action="#" className="modal__form-login">
        <a href="../">
          <div className="modal__logo">
            <Image alt="logo" src="../img/logo_modal.png" />
          </div>
        </a>
        <input
          className="modal__input login"
          name="login"
          placeholder="Почта"
          type="text"
        />
        <input
          className="modal__input password"
          name="password"
          placeholder="Пароль"
          type="password"
        />
        <button className="modal__btn-enter">
          <a href="../index.html">Войти</a>
        </button>
        <button className="modal__btn-signup">
          <a href="signup.html">Зарегистрироваться</a>
        </button>
      </form>
    </div>
  </div>
</div>;
