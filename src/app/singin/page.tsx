import Image from "next/image";

import { getUser } from "@/store/features/userSlice";
import { useAppDispatch } from "@/hooks";

export default function SignInPage() {
  const dispatch = useAppDispatch();

  const handleSignin = async (
    userData: {
      email: string;
      password: string;
    }
    // event: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    try {
      // Диспетчеризация thunk getUser и разворачивание результата с помощью unwrap
      await dispatch(getUser(userData)).unwrap();
      // Действия после успешного выполнения thunk, если необходимо
      console.log("Успешно!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Обработка ошибки, если thunk завершился неудачно
        console.error("Ошибка:", error.message);
      }
    }
  };

  return (
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
            <button className="modal__btn-enter" onClick={() => handleSignin}>
              <a href="../index.html">Войти</a>
            </button>
            <button className="modal__btn-signup">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
