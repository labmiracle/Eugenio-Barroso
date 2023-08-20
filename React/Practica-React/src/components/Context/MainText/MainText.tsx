import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import ES from "./ES";
import EN from "./EN";

function MainText() {
  const language = useContext(LanguageContext);

  return language === "EN" ? <EN /> : <ES />;
}

export default MainText;
