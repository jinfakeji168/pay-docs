import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '接入指引',
        children: [
          '/zh/guide/introduction.md',
          '/zh/guide/signature.md',

          '/zh/guide/payment.md',
          '/zh/guide/payment-query.md',
          '/zh/guide/payment-notification.md',
          '/zh/guide/transfer.md',
          '/zh/guide/transfer-query.md',
          '/zh/guide/transfer-notification.md',
          '/zh/guide/balance.md',

          '/zh/guide/channels.md',
          '/zh/guide/responses.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '参考',
        children: [
          '/zh/reference/README.md',
          '/zh/reference/brazil.md',
          '/zh/reference/china.md',
          '/zh/reference/india.md',
          '/zh/reference/indonesia.md',
          '/zh/reference/mexico.md',
          '/zh/reference/philippines.md',
          '/zh/reference/thailand.md',
          '/zh/reference/ukraine.md',
          '/zh/reference/vietnam.md',
      ],
    },
  ],
}
