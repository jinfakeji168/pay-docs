import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'en-US',
            title: 'Pay Docs',
            description: ' '
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Pay Docs'
        }
    },

    theme: defaultTheme({
        //logo: '/images/hero.png',

        locales: {
            '/': {
                navbar: navbar.en,
                sidebar: sidebar.en,
            },
            '/zh/': {
                navbar: navbar.zh,
                sidebar: sidebar.zh,

                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言'
            }
        }
    }),

    markdown: {},

    plugins: []
})
