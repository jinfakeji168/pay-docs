import { SidebarConfig } from 'vuepress'

export const en: SidebarConfig = {
    '/': [
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
        '/banks.md',
    ]
}
