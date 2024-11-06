import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Context = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to the Theme App</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};
