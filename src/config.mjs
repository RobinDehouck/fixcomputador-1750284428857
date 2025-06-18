export const SITE = {
  name: 'fixcomputador',
  origin: 'https://fixcomputador.vercel.app',
  basePathname: '/',
  title: 'fixcomputador',
  description: 'Seu guia completo sobre tech. Encontre as melhores informações, dicas e recomendações.',
  defaultImage: 'default.png',
  defaultTheme: 'system',
  language: 'pt-BR',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }),
};

export const BLOG = {
  disabled: false,
  postsPerPage: 6,
  post: {
    permalink: '/blog/%slug%',
    noindex: false,
  },
  list: {
    pathname: 'blog',
    noindex: false,
  },
  category: {
    pathname: 'category',
    noindex: true,
  },
  tag: {
    pathname: 'tag',
    noindex: true,
  },
};