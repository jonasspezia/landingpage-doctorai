import { MetadataRoute } from 'next';

// Dados para geração dinâmica do sitemap
const BASE_URL = 'https://teledocmedical.ai';

// Artigos do blog
const blogArticles = [
  { slug: 'como-ia-ajuda-medicos-documentacao', lastModified: '2026-01-22' },
  { slug: 'transcricao-automatica-consulta-medica', lastModified: '2026-01-22' },
  { slug: 'prontuario-soap-automatico-guia', lastModified: '2026-01-22' },
  { slug: 'tempo-documentacao-medica-solucoes', lastModified: '2026-01-22' },
  { slug: 'ia-medicina-etica-seguranca', lastModified: '2026-01-22' },
];

// Especialidades médicas
const specialties = [
  'pediatria',
  'cardiologia',
  'emergencia',
  'clinica-geral',
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Páginas estáticas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/calculadora`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/especialidades`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/casos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recursos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/integracoes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/seguranca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Páginas de artigos do blog
  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.lastModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Páginas de especialidades
  const specialtyPages: MetadataRoute.Sitemap = specialties.map((specialty) => ({
    url: `${BASE_URL}/especialidades/${specialty}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...specialtyPages];
}
