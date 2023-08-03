import { GetType } from '@/app/api/get/frameworks/route'

export const getLibrariesData: GetType = {
  data: {
    objects: [
      {
        package: {
          name: 'next',
          scope: 'unscoped',
          version: '13.4.12',
          description: 'The React Framework',
          date: '2023-07-21T20:37:16.261Z',
          links: {
            npm: 'https://www.npmjs.com/package/next',
            homepage: 'https://nextjs.org',
            repository: 'https://github.com/vercel/next.js',
            bugs: 'https://github.com/vercel/next.js/issues',
          },
          publisher: {
            username: 'vercel-release-bot',
            email: 'infra+release@vercel.com',
          },
          maintainers: [
            { username: 'rauchg', email: 'rauchg@gmail.com' },
            { username: 'timneutkens', email: 'timneutkens@icloud.com' },
            { username: 'vercel-release-bot', email: 'infra+release@vercel.com' },
          ],
        },
        score: {
          final: 0.5612708223130073,
          detail: {
            quality: 0.7887521008520341,
            popularity: 0.5942243582592297,
            maintenance: 0.3333333333333333,
          },
        },
        searchScore: 0.009354811,
      },
    ],
    total: 14913,
    time: 'Thu Aug 03 2023 11:53:41 GMT+0000 (Coordinated Universal Time)',
  },
}
