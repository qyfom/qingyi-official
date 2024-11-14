// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '轻易表单',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      logo: {
        light: './src/assets/logo_256x256.png',
        dark: './src/assets/logo_256x256.png',
      },
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: '轻易表单',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '产品介绍', slug: 'guides/example' },
					],
				},
        {
          label: '发布日志',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '版本记录', slug: 'reference/example' },
          ],
        },
				// {
				// 	label: '发布日志',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
