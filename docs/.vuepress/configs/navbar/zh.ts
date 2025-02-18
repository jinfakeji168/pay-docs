import type { NavbarOptions } from '@vuepress/theme-default'

export const navbarZh: NavbarOptions = [
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
  {
    text: '参考',
    children: [
      '/zh/reference/brazil.md',
      '/zh/reference/china.md',
      '/zh/reference/india.md',
      '/zh/reference/indonesia.md',
      '/zh/reference/mexico.md',
      '/zh/reference/nigeria.md',
      '/zh/reference/philippines.md',
      '/zh/reference/south-africa.md',
      '/zh/reference/thailand.md',
      '/zh/reference/ukraine.md',
      '/zh/reference/vietnam.md',
    ],
  },
]
