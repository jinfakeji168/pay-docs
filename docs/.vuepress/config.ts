import { defaultTheme, defineUserConfig } from 'vuepress';
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

    theme: defaultTheme({
        locales: {
            '/' : {
                navbar: navbar,

                sidebar: sidebar,
                //sidebarDepth: 1,
            },
        },
    }),
});
