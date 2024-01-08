import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
    '/': [
        '/README.md',
        {
            text: '代收',
            collapsible: true,
            children: [
                {
                    text: '代收接口',
                    collapsible: true,
                    children: [
                        '/payments/create.md',
                        '/payments/query.md',
                    ],
                },
                '/payments/channels.md',
                '/payments/notifications.md',
                {
                    text: '代收业务示例',
                    collapsible: true,
                    children: [
                        '/payments/extra/brazil.md',
                        '/payments/extra/india.md',
                        '/payments/extra/mexico.md',
                        '/payments/extra/thailand.md',
                        '/payments/extra/vietnam.md',
                        '/payments/extra/indonesia.md',
                        '/payments/extra/china.md',
                        '/payments/extra/philippines.md',
                    ],
                },
            ],
        },
        {
            text: '代付',
            collapsible: true,
            children: [
                {
                    text: '代付接口',
                    collapsible: true,
                    children: [
                        '/transfers/create.md',
                        '/transfers/query.md',
                    ],
                },
                '/transfers/channels.md',
                '/transfers/notifications.md',
                {
                    text: '代付业务参数',
                    collapsible: true,
                    children: [
                        '/transfers/extra/brazil.md',
                        '/transfers/extra/india.md',
                        '/transfers/extra/mexico.md',
                        '/transfers/extra/thailand.md',
                        '/transfers/extra/vietnam.md',
                        '/transfers/extra/indonesia.md',
                        '/transfers/extra/china.md',
                        '/transfers/extra/philippines.md',
                    ],
                },
            ],
        },
        '/balances.md',
        '/responses.md',
    ],
}
