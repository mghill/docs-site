module.exports = {
  title: 'PlaceOS',
  url: 'https://docs.place.technology',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'placeos',
  projectName: 'docs',
  themeConfig: {
    defaultDarkMode: true,
    image: 'img/meta.png',
    announcementBar: {
      id: 'wip',
      content: "<b>PlaceOS</b> is currently in early preview. If you are stuck and in need of a human, come say hi at <a href=\"mailto:support@place.technology\">support@place.technology</a>.",
      backgroundColor: '#24Cdfd',
      textColor: '#fff',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'PlaceOS Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
          items: [
            { label: 'Getting Started', href: '' },
            { label: 'Develop', href: '' },
            { label: 'Deploy', href: '' },
            { label: 'Backoffice', href: '' },
          ],
        },
        {
          to: 'docs/doc1',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/doc1',
          activeBasePath: 'drivers',
          label: 'Drivers',
          position: 'left',
        },
        {
          href: 'https://github.com/placeos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/placeos/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
