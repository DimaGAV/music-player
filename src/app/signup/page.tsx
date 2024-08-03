"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { regUser } from "@/store/features/userSlice";
import { useAppDispatch } from "@/hooks";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (
    userData: {
      email: string;
      password: string;
      username: string;
    },
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      return alert("заполнить поля!");
    }
    try {
      await dispatch(regUser(userData)).unwrap();
      console.log("Успешно!");
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Ошибка:", error.message);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form action="#" className={styles.modalFormLogin}>
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  alt="logo"
                  src="/img/logo_modal.png"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              onChange={handleInputChange}
              className={styles.modalInput}
              name="email"
              value={formData.email}
              placeholder="Почта"
              type="text"
            />
            <input
              onChange={handleInputChange}
              className={styles.modalInput}
              name="password"
              value={formData.password}
              placeholder="Пароль"
              type="password"
            />
            <input
              onChange={handleInputChange}
              className={styles.modalInput}
              name="username"
              value={formData.username}
              placeholder="Имя пользователя"
              type="text"
            />
            <button
              className={styles.modalBtnEnter}
              onClick={(e) =>
                handleSignUp(
                  {
                    email: formData.email,
                    password: formData.password,
                    username: formData.username,
                  },
                  e
                )
              }
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
