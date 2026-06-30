// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UMM Documentation',
			description: 'Documentation for UMM',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is UMM ?', slug: 'introduction/what-is-umm' },
						{ label: 'Getting Started', slug: 'introduction/getting-started' },
						{ label: 'Installation', slug: 'introduction/installation' },
					],
				},
				{
					label: 'Mod Guide',
					items: [{ autogenerate: { directory: 'mod-guide' } }],
				},
				{
					label: 'Plug-in',
					items: [{ autogenerate: { directory: 'plugin-guide' } }],
				},
				{
					label: 'Theme Guide',
					items: [{ autogenerate: { directory: 'theme-guide' } }],
				},
				{
					label: 'Games',
					items: [
						{
							label: 'Skyrim',
							items: [
								{ label: 'Installing Mods', slug: 'games/skyrim/installation' },
							],
						},
						{
							label: 'The Witcher III',
							items: [
								{ label: 'Installing Mods', slug: 'games/the-witcher-iii/installation' },
							],
						},
					],
				},
			],
		}),
	],
});
