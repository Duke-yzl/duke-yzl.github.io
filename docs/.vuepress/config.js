import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'duke-文档',
    description: '日常笔记',
    base:'/',
    plugins: [
        [
            (pluginOptions, context) => ({
                //文档加密
                name: "vuepress-plugin-passwd",
                // ... the rest of options
                extendsPage: (page,app) => {

                    console.log('--------------------------')
                    console.log(page)
                    console.log('--------------------------')
                    // console.log(window.location.href)

                }
            }),
        ],
    ],
    theme:defaultTheme ({
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup
            {
                text: '笔记',
                children: [
                    {
                        text: '日常',
                        link: '/group/foo.md'
                    },
                    {
                        text: '工作',
                        link: '/group/bar.md'
                    },
                ],
            },
        ],
        // 所有页面会使用相同的侧边栏
        sidebar: 'auto',
    })



})