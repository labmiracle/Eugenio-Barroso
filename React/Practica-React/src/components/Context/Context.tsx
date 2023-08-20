import { useState } from "react";
import { LanguageContext, Language } from "./LanguageContext/LanguageContext";
import Button from "./Button/Button";
import MainText from "./MainText/MainText";

function Context() {
  const [language, setLanguage] = useState<Language>("ES");

  return (
    <>
      <LanguageContext.Provider value={language}>
        <MainText />
        <Button setLanguage={setLanguage} />
      </LanguageContext.Provider>
    </>
  );
}

export default Context;
