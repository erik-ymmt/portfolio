import { useContext } from "react";
import languageContext from "../context/languageContext";

function Footer() {
  const { text } = useContext(languageContext);

  return (
    <footer>
      {text.developed} Erik Yamamoto
    </footer>
  );
}

export default Footer;
