import { createContext } from "react";

export type Language = "ES" | "EN";

export const LanguageContext = createContext<Language>("ES");
