import * as GetProjectOverviewApi from '@/api/get/overview/route'
export const mockGetProjectOverviewResponse: GetProjectOverviewApi.GetType = {
  'project_details': [
    {
      'team_id': '15deeb49-9925-4ab7-be55-f10eb158122a',
      'project_abstract':
        '[{"type":"h1","children":[{"text":"🌳 プロジェクトの概要"}],"id":"lm2w9"},{"type":"blockquote","children":[{"text":"e.g.; "},{"text":"プロジェクトの概要・目指すもの・開発の方針","highlight":true},{"text":"などを共有"}],"id":"wb1eg"},{"type":"h1","children":[{"text":"🌱 Repository"}],"id":"rc756"},{"type":"blockquote","children":[{"text":"e.g.; プロジェクトで使用する"},{"text":"Github repositoryのリンク","highlight":true},{"text":"などを共有","color":"#000000"}],"id":"ft4x6"},{"type":"p","children":[{"text":"🔗 Link"}],"id":"kqajw"},{"type":"h1","children":[{"text":"🎨 Design System"}],"id":"vjt18"},{"type":"blockquote","children":[{"text":"e.g.; プロジェクトで使用するデザインシステムの"},{"text":"Figmaリンク","highlight":true},{"text":"などを共有"}],"id":"df5r2"},{"type":"p","children":[{"text":"🔗 Link"}],"id":"ncj01"}]',
    },
  ],
}
