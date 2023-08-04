import { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
    '/zh/': [
        '/zh/README.md',
        '/zh/signature.md',
        {
            text: 'API 参考',
            children: [
                '/zh/trade-api.md',
                '/zh/transfer-api.md',
            ],
            collapsible: true,
        },
        {
            text: '通知',
            children: [
                '/zh/trade-notification.md',
                '/zh/transfer-notification.md',
            ],
            collapsible: true,
        },
        '/zh/channels.md',
        '/zh/banks.md',
    ]
}
