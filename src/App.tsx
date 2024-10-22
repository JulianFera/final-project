import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import SingelMovie from "./pages/SingelMovie";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { ThemeType } from "./types";
import { FloatButton } from "antd";

function App() {
  const defaultTheme: ThemeType = localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeType)
    : "dark";
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/singleMovie",
      element: <SingelMovie />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ]);
  return (
    <>
      <GlobalContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
        <FloatButton.BackTop />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
