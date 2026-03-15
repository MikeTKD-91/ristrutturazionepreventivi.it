// app/napoli/page.tsx
// Questa pagina esiste solo come fallback.
// Il redirect 301 verso /comune/napoli/ è gestito in vercel.json
import { redirect } from "next/navigation";

export default function NapoliRedirect() {
  redirect("/comune/napoli/");
}
