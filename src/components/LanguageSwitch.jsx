import * as Switch from "@radix-ui/react-switch";
import { useContext } from "react";
import "../styles/languageSwitch.css";
import languageContext from "../context/languageContext";

function LanguageSwitch() {
  const {setLanguage, language} = useContext(languageContext);

  const toggleLanguage = () => {
    const toggle = language === 'en' ? 'ptBR' : 'en'
    setLanguage(toggle);
  }

  return (
    <div className="langSwitchContainer">
      <Switch.Root className="langSwitch" onClick={toggleLanguage}>
        <Switch.Thumb className="langSwitchThumb" />
      </Switch.Root>
      <div className="langOptions">
        <span>{"en \u00A0"}</span>
        <span>pt</span>
      </div>
      {/* <p className="langOptions">lang.</p> */}
    </div>
  );
}

export default LanguageSwitch;
