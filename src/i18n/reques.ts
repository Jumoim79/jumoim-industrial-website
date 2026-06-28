import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});export const locales = ["en", "de", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}