import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'en-US',
            title: 'Pay Docs',
            description: ' '
        }
    },

    theme: defaultTheme({
        //logo: '/images/hero.png',

        locales: {
            '/': {
                sidebar: [
                    '/README.md',
                    '/signature.md',
                    {
                        text: 'API Reference',
                        children: [
                            '/trade-api.md',
                            '/transfer-api.md',
                        ],
                        collapsible: true,
                    },
                    {
                        text: 'Notification',
                        children: [
                            '/trade-notification.md',
                            '/transfer-notification.md',
                        ],
                        collapsible: true,
                    },
                    '/channels.md',
                    '/bank-codes.md',
                ]
            }
        }
    }),

    markdown: {},

    plugins: []
})
