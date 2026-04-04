import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RUFi Docs',
  tagline: 'Real Utility Finance Products — Documentation & Knowledge Base',
  favicon: 'img/favicon.svg',

  url: 'https://spiritclawd.github.io',
  baseUrl: '/rufi-docs/',

  organizationName: 'spiritclawd',
  projectName: 'rufi-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'description', content: 'Real Utility Finance Products — Documentation & Knowledge Base'},
      {name: 'keywords', content: 'RUFi, guessmyNFT, Veil, AlliGo, Starknet, ZK, NFT, on-chain gaming, privacy'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'RUFi Docs'},
      {property: 'og:description', content: 'Documentation and knowledge base for RUFi products — guessmyNFT, Veil, and AlliGo.'},
      {property: 'og:url', content: 'https://rufidocs.aircade.xyz'},
      {property: 'og:image', content: 'https://rufidocs.aircade.xyz/img/og-image.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'RUFi Docs'},
      {name: 'twitter:description', content: 'Documentation and knowledge base for RUFi products — guessmyNFT, Veil, and AlliGo.'},
      {name: 'twitter:image', content: 'https://rufidocs.aircade.xyz/img/og-image.png'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RUFi',
      logo: {
        alt: 'RUFi Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: 'https://rufi.aircade.xyz',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guessmynftSidebar',
          position: 'left',
          label: 'guessmyNFT',
        },
        {
          type: 'docSidebar',
          sidebarId: 'veilSidebar',
          position: 'left',
          label: 'Veil',
        },
        {
          type: 'docSidebar',
          sidebarId: 'alligoSidebar',
          position: 'left',
          label: 'AlliGo',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/NormieLabs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {label: 'guessmyNFT', to: '/docs/guessmynft/intro'},
            {label: 'Veil', to: '/docs/veil/intro'},
            {label: 'AlliGo', to: '/docs/alligo/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/NormieLabs'},
            {label: 'Play guessmyNFT', href: 'https://guesschizodio.fun'},
          ],
        },
        {
          title: 'RUFi',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'rufi.aircade.xyz', href: 'https://rufi.aircade.xyz'},
          ],
        },
      ],
      copyright: `RUFi © ${new Date().getFullYear()} — Real Utility Finance Products`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'toml', 'json', 'rust'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
