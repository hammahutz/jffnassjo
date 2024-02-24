import { persistentMap } from "@nanostores/persistent";

export const settings = persistentMap("settings", {
    theme: 'light',
});

console.log(settings.get().theme);