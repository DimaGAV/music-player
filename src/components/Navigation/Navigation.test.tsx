import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "@/components/Navigation/Navigation";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "@/store/features/playlistSlice";

describe("Navigation component", () => {
  const testStore = configureStore({
    reducer: playlistReducer,
  });
  it("should display the menu when the burger is clicked", () => {
    render(
      <Provider store={testStore}>
        <Navigation />
      </Provider>
    );

    // Проверяем, что меню изначально скрыто
    expect(screen.queryByText("Menu Content")).not.toBeInTheDocument();

    // Находим бургер-меню по data-testid и кликаем по нему
    const burgerButton = screen.getByTestId("burger-button");
    fireEvent.click(burgerButton);

    // Проверяем, что меню отображается после клика
    expect(screen.getByText("Menu Content")).toBeInTheDocument();
  });
});
