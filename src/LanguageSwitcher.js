import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = async (newLang) => {
    await i18n.changeLanguage(newLang);
    const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, '');
    navigate(`/${newLang}${currentPath}`);
    window.location.reload(); 
  };

  return ( 
    <div className="flex gap-2 items-center">
      <button onClick={() => handleLanguageChange("az")}>AZ</button>
      <button onClick={() => handleLanguageChange("en")}>EN</button>
    </div>
  ); 
};


export default LanguageSwitcher;