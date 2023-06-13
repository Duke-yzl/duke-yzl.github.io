import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'duke-文档',
    description: 'yzl的文档',
    base: '/',
    head: [
        [
            'link', { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' }
        ]
    ]

})