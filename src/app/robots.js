export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://herbalhubbd.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/checkout/success', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
