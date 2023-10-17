export const RAPID_API_URL = process.env.NEXT_PUBLIC_RAPID_API_URL as string
export const HEADERS = {
  'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
  'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
}
