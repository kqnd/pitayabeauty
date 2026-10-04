const WHATSAPP_DIGITS = "557197369095";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DISPLAY = "+55 71 9736-9095";
export const INSTAGRAM_HANDLE = "@lojapitayabeauty";
export const INSTAGRAM_URL = "https://instagram.com/lojapitayabeauty";
export const STORE_ADDRESS_LINES = [
  "Shopping Busca Vida — Loja 09, Piso L1",
  "Avenida Tiradentes, nº 30, Vila de Abrantes",
  "Camaçari, Bahia",
];
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Shopping Busca Vida, Avenida Tiradentes 30, Vila de Abrantes, Camaçari, Bahia"
  );
