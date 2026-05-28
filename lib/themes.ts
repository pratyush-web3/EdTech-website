import type { ThemeName } from "@/types";

export const themes: Array<{
  id: ThemeName;
  label: string;
  shortLabel: string;
  colors: string[];
}> = [
  { id: "oro", label: "Oro Veneziano", shortLabel: "Oro", colors: ["#10100F", "#D3AD4F", "#FFF7E6"] },
  { id: "rinascimento", label: "Rinascimento", shortLabel: "Rin", colors: ["#F8F4ED", "#8F3F2F", "#25483D"] },
  { id: "milano", label: "Milano Notte", shortLabel: "Mil", colors: ["#090A12", "#7C74FF", "#F06F73"] }
];
