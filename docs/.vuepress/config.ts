import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbarZh, sidebarZh  } from './configs/index';

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'zh-CN',
            title: '大洋支付',
            description: '商户接口文档',
        },
    },

    bundler: viteBundler(),
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        editLink: false,
        contributors: false,
        lastUpdated: false,

        colorMode: 'dark',

        locales: {
            '/' : {
                navbar: navbarZh,

                sidebar: sidebarZh,
                //sidebarDepth: 1,
            },
        },
    }),
});
