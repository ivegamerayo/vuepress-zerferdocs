module.exports = {
  dest: "docs",
  base: "/",
  title: "ZerferPlay",
  description: "Siempre aprendiendo",

  head: [
    [
      "meta",
      {
        name: "theme-color",
        content: "#ECA30B",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
  ],
  theme: "vuepress-theme-hope",

  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    feed: {
      hostname: "zerferdocs.vercel.app",
    },
    seo: {
      hostname: "zerferdocs.vercel.app",
    },
    sitemap: {
      hostname: "zerferdocs.vercel.app",
    },
    nav: [
      {
        text: "Inicio",
        link: "/",
      },
      {
        text: "Scratch",
        link: "/scratch/",
      },
      {
        text: "Instalación RBCodrone",
        link: "https://docs.google.com/document/d/1TikjV_b0NHFRg23NQTdxxm5lFsP0JCbaX21FuFnGS0s/edit",
      },
      {
        text: "Lego",
        link: "https://zerferplay.vercel.app",
      },
      // {
      //   text: 'Challenges',
      //   prefix: '/challenges/',
      //   items: [{
      //       text: "Lego 16:00",
      //       link: "markdown/",
      //       icon: "markdown"
      //     },
      //     {
      //       text: "VuePress",
      //       link: "vuepress/",
      //       icon: "vue"
      //     },
      //   ]
      // }
    ],
    sidebar: [
      "/scratch/",
      "/scratch/01-pingpong",
      "/scratch/02-bruja",
      "/scratch/03-arkanoid",
      "/MicroBit/",
      "/MicroBit/01-piedra-papel-tijera",
      "/Nextcloud/01-Instalación",
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
