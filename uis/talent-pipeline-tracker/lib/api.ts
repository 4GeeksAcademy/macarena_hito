export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getApiUrl(path: string) {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  return `${API_URL}${path}`;
}
