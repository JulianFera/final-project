import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Footer.css";

export default function Footer() {
  const themeContext = useContext(GlobalContext);
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundColor:
            themeContext.theme === "light" ? "#b8b8b8" : "#404040",
          color: themeContext.theme === "light" ? "#333" : "#E0E0E0",
        }}
      >
        <div className="footer-content">
          <img
            src={
              themeContext.theme === "light"
                ? "/full-logo-black.webp"
                : "/full-logo-white.webp"
            }
          />

          <p>
            Copyright &copy; {new Date().getFullYear()} | CinemaVerse. All
            rights reserved.
          </p>
        </div>
        <p>
          This site does not store any files on its server! All contents are
          provided by non-affiliated third parties!
        </p>
      </footer>
    </>
  );
}
