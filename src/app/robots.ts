export const dynamic = 'force-dynamic'

export default async function robots() {
  const time = await fetch("http://worldtimeapi.org/api/timezone/Europe/Paris",
    {
      cache: 'no-store'
    }
  );
  const unixtime = await time.json();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://acme.com/sitemap.xml?time=' + unixtime['unixtime'],
  }
}