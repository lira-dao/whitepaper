import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'LIRA DAO Whitepaper',
  tagline: 'The cryptocurrency global revolution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://whitepaper.liradao.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lira-dao', // Usually your GitHub org/user name.
  projectName: 'whitepaper-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
		locales: ['en'],
    // locales: ['en', 'it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
					routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
				blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LIRA DAO',
      logo: {
        alt: 'lira dao logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'whitepaperSidebar',
          position: 'left',
          label: 'Whitepaper',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lira-dao',
          label: 'GitHub',
          position: 'right',
        },
				// {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Whitepaper',
          items: [
            {
              label: 'Whitepaper',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/fDRBajCB9V',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/LIRA_DAO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lira-dao',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LIRA DAO, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
