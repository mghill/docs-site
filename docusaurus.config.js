module.exports = {
  title: 'PlaceOS',
  url: 'https://docs.placeos.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'placeos',
  projectName: 'docs-site',
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      switchConfig: {
        darkIcon: '●',
        lightIcon: '●',
      },
    prism: {
      additionalLanguages: ['crystal'],
      },
    },
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
        alt: 'PlaceOS',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        { to: 'overview', label: 'Overview' },
        { to: 'how-to', label: 'How-To' },
        { to: 'tutorial', label: 'Tutorials' },
        { to: 'reference', label: 'Reference' }
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'light',
      links: [
      ],
    },
  },
  stylesheets: [
    '/fonts/fonts.css'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: process.env.npm_package_config_docs_path || 'docs',
          editUrl: function({ docPath }) {
            return `https://github.com/placeos/docs/edit/master/${docPath}`;
          },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          include: [
            './!(README).md',
            './!(node_modules)/**/!(README).md'
          ],
          showLastUpdateTime: true,
          beforeDefaultRemarkPlugins: [
            require('./src/plugins/remark-tabs.js')
          ],
          remarkPlugins: [
            require('remark-abbr')
          ],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
