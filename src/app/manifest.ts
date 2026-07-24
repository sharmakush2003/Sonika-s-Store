import { MetadataRoute } from 'next'

export const dynamic = "force-static"
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'House of Sonika',
    short_name: 'Sonika',
    description: "Jaipur's Finest Home & Fashion",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF5EE',
    theme_color: '#FAF5EE',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      },
    ],
  }
}
