import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar, navbarZh, sidebar, sidebarZh } from './configs'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'DaYangPay',
      description: ' Documentation for Merchants',
    },
    '/zh/': {
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
      '/': {
        navbar,
        sidebar,
      },

      '/zh/': {
        navbar: navbarZh,
        sidebar: sidebarZh,

        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),
})
