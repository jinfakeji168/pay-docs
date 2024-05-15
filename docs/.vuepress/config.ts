import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sidebar } from './sidebar';
import { navbar } from './navbar';

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'zh-CN',
            title: '大洋支付',
        },
    },

    bundler: viteBundler(),
    theme: defaultTheme({
        editLink: false,
        contributors: false,

        locales: {
            '/' : {
                navbar: navbar,

                sidebar: sidebar,
                //sidebarDepth: 1,
            },
        },
    }),
});
