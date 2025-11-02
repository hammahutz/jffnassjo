import { persistentAtom } from "@nanostores/persistent";

export interface Settings {
  currentTheme: "light" | "coffee" ;
}

export const Settings = persistentAtom<Settings>(
  "settings",
  { currentTheme: "light" } as Settings,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);
