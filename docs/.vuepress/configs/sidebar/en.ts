import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/introduction.md',
                '/guide/signature.md',

                '/guide/payment.md',
                '/guide/payment-query.md',
                '/guide/payment-notification.md',
                '/guide/transfer.md',
                '/guide/transfer-query.md',
                '/guide/transfer-notification.md',
                '/guide/balance.md',

                '/guide/channels.md',
                '/guide/responses.md',
            ],
        },
    ],
    '/reference/': [
        {
            text: 'Reference',
            children: [
                '/reference/README.md',
                '/reference/brazil.md',
                '/reference/china.md',
                '/reference/india.md',
                '/reference/indonesia.md',
                '/reference/mexico.md',
                '/reference/philippines.md',
                '/reference/thailand.md',
                '/reference/ukraine.md',
                '/reference/vietnam.md',
            ],
        },
    ],
}
